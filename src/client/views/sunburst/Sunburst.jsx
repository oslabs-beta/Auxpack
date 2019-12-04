import React, { Component } from 'react';
import * as d3 from "d3";
import lodash from 'lodash';
import { red } from '@material-ui/core/colors';

export default class Sunburst extends Component {
    constructor() {
        super()
        this.state = {};
    }
    componentDidMount() {
        this.drawChart();
    }
    shouldComponentUpdate(nextProps, nextState) {
        // only re-render if the data will change
        return !lodash.isEqual(nextProps.burstData, this.props.burstData);
    }

    componentDidUpdate() {
        d3.select(this.svg).selectAll("g").remove();
        this.drawChart();
    }

    drawChart() {
        /*
          D3 code to create our visualization by appending onto this.svg
        */

        // Dimensions of sunburst.
        const width = 900;
        const height = 900;
        const radius = Math.min(width, height) / 2;
        const _self = this;

        // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
        const b = {
            w: 75, h: 30, s: 3, t: 10
        };

        // Mapping of step names to colors.
        // let colors = {
        //     "home": "#5687d1",
        //     "product": "#7b615c",
        //     "search": "#de783b",
        //     "account": "#6ab975",
        //     "other": "#a173d1",
        //     "end": "#bbbbbb"
        // };

        const color = function () {
            let ctr = 0;
            const hex = ['#53c79f', '#64b0cc', '#7a6fca', '#ca6f96', '#e58c72', '#e5c072']
            return function () {
                if (ctr === hex.length - 1) {
                    ctr = 0;
                    return hex[ctr]
                } else {
                    ctr++
                    return hex[ctr]
                }
            }
        }

        const loopColors = color()

        // Total size of all segments; we set this later, after loading the data.
        let totalSize = 0;

        /*  ================ create the svg =================== */
        const vis = d3.select(this.svg)
            .attr("width", width)
            .attr("height", height)
            .append("svg:g")
            .attr("id", "container")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // d3.select("#explanation")
        //     .style("visibility", "hidden");

        const partition = d3.partition()
            .size([2 * Math.PI, radius * radius]);

        const arc = d3.arc()
            .startAngle(function (d) { return d.x0; })
            .endAngle(function (d) { return d.x1; })
            .innerRadius(function (d) { return Math.sqrt(d.y0); })
            .outerRadius(function (d) { return Math.sqrt(d.y1); });

        // Use d3.text and d3.csvParseRows so that we do not need to have a header
        // row, and can receive the csv as an array of arrays.
        const json = buildHierarchy(this.props.burstData);
        createVisualization(json);

        // Main function to draw and set up the visualization, once we have the data.
        function createVisualization(json) {

            // Basic setup of page elements.
            initializeBreadcrumbTrail();

            // Bounding circle underneath the sunburst, to make it easier to detect
            // when the mouse leaves the parent g.
            vis.append("svg:circle")
                .attr("r", radius)
                .style("opacity", 0);

            // Turn the data into a d3 hierarchy and calculate the sums.
            const root = d3.hierarchy(json)
                .sum(function (d) { return d.size; })
                .sort(function (a, b) { return b.value - a.value; });

            // For efficiency, filter nodes to keep only those large enough to see.
            const nodes = partition(root).descendants()
                .filter(function (d) {
                    return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
                });

            //let i = 0;
            const path = vis.data([json]).selectAll("path")
                .data(nodes)
                .enter().append("svg:path")
                .attr("display", function (d) { return d.depth ? null : "none"; })
                .attr("d", arc)
                .attr("fill-rule", "evenodd")
                .style("fill", function (d) { return loopColors() })
                .style("opacity", 1)
                .on("mouseover", mouseover);

            // Add the mouseleave handler to the bounding circle.
            d3.select("#container").on("mouseleave", mouseleave);

            // Get total size of the tree = value of root node from partition.
            totalSize = path.datum().value;
        };

        // Fade all but the current sequence, and show it in the breadcrumb trail.
        function mouseover(d) {
            let percentage = (100 * d.value / totalSize).toPrecision(3);
            let percentageString = percentage + "%";
            if (percentage < 0.1) {
                percentageString = "< 0.1%";
            }
            // **************** adding explanation into div#id *********************

            // CENTER CONTENT
            vis.append('g')
                .style("text-anchor", "middle").attr('id', 'details');

            d3.select('#details').append('text')
                .text(`Percentage: ${percentageString}.`)

            d3.select('#details').append('text')
                .attr('dy', '1.5em')
                .text(`Size: ${d.value / 1000} kB.`)

            d3.select('#details').append('text')
                .attr('dy', '3em')
                .text(`File Name: ${d.data.name}`)


            d3.select("#percentage")
                .text(percentageString);
            //ADDED FILE NAME
            d3.select("#filename")
                .text(d.data.name)

            //ADDED FILE SIZE
            d3.select("#filesize")
                .text(d.value / 1000)

            d3.select("#explanation")
                .style("visibility", "");

            const sequenceArray = d.ancestors().reverse();
            sequenceArray.shift(); // remove root node from the array
            let trickArray = sequenceArray.slice(0);
            // convert path array to a '/' seperated path string. add '/' at the end if it's a directory.
            const path = "./" + trickArray.map(node => node.data.name).join("/") + (trickArray[trickArray.length - 1].children ? "/" : "");
            _self.props.onHover(path);

            for (let i = 1; i < trickArray.length + 1; i++) {
                updateBreadcrumbs(trickArray.slice(0, i), percentageString);
            }
            // Fade all the segments.
            d3.selectAll("#chart").selectAll("path")
                .style("opacity", 0.3);

            // Then highlight only those that are an ancestor of the current segment.
            vis.selectAll("path")
                .filter(function (node) {
                    return (sequenceArray.indexOf(node) >= 0);
                })
                .style("opacity", 1);
        }

        // Restore everything to full opacity when moving off the visualization.
        function mouseleave(d) {

            // Hide the breadcrumb trail
            d3.select("#trail")
                .style("visibility", "hidden");

            // Deactivate all segments during transition.
            d3.selectAll("path").on("mouseover", null);

            // Transition each segment to full opacity and then reactivate it.
            d3.selectAll("#chart").selectAll("path")
                .transition()
                .duration(1000)
                .style("opacity", 1)
                .on("end", function () {
                    d3.select(this).on("mouseover", mouseover);
                    //console.log(`removed: `, d3.select('g#details'))
                });

            //console.log(`removed: `, d3.select('g#details'));

            //d3.selectAll('g#details').style('visibility', 'hidden');
            d3.select('g#details').remove()
            d3.select("#explanation")
                .style("visibility", "hidden");

            _self.props.onHover(null);
        }

        function initializeBreadcrumbTrail() {
            // Add the svg area.
            let trail = d3.select("#sequence").append("svg:svg")
                .attr("width", width)
                .attr("height", 50)
                .attr("id", "trail");

            // Add the label at the end, for the percentage.
            trail.append("svg:text")
                .attr("id", "endlabel")
                .style("fill", "#fff");   //controls the color of the percentage
        }

        // Generate a string that describes the points of a breadcrumb polygon.
        function breadcrumbPoints(d, i) {
            let points = [];
            points.push("0,0");
            points.push(b.w + d.data.name.length * 7.5 + ",0");  //CONTROLS THE SHAPE OF THE POLYGON
            points.push(b.w + d.data.name.length * 7.5 + b.t + "," + (b.h / 2));
            points.push(b.w + d.data.name.length * 7.5 + "," + b.h);
            points.push("0," + b.h);
            if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
                points.push(b.t + "," + (b.h / 2));
            }
            return points.join(" ");
        }

        // Update the breadcrumb trail to show the current sequence and percentage.
        function updateBreadcrumbs(nodeArray, percentageString) {

            // Data join; key function combines name and depth (= position in sequence).
            let trail = d3.select("#trail")
                .selectAll("g")
                .data(nodeArray, function (d) { return d.data.name + d.depth; });

            // Remove exiting nodes.
            trail.exit().remove();

            // Add breadcrumb and label for entering nodes.
            let entering = trail.enter().append("svg:g");

            entering.append("svg:polygon")
                .attr("points", breadcrumbPoints)
                .style("fill", function (d) { return '#53c79f'; });

            entering.append("svg:text")
                .attr("x", (b.w + b.t) / 2)
                .attr("y", b.h / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "start")
                .text(function (d) { return d.data.name; });

            // Now move and update the percentage at the end.
            let nodeAryFlat = '';

            for (let i = 0; i < nodeArray.length; i++) {
                nodeAryFlat = nodeAryFlat + ' ' + nodeArray[i].data.name
            }

            let nodeAryFlatLength = 0;
            let nodeAryFlatLengthPercentage = 0;
            for (let i = 1; i < nodeArray.length; i++) {
                nodeAryFlatLength = nodeAryFlatLength + b.w + nodeArray[i - 1].data.name.length * 7.5 + b.t
                nodeAryFlatLengthPercentage = nodeAryFlatLength + b.w + nodeArray[i].data.name.length * 7.5 + b.t + 15
            }

            entering.attr("transform", function (d, i) {
                if (i === 0) {
                    return "translate(0, 0)"
                } else {
                    return "translate(" + nodeAryFlatLength + ", 0)";   //POSITIONING OF WORDS
                }
            });

            d3.select("#trail").select("#endlabel")
                .attr("x", (nodeAryFlatLengthPercentage))  //CONTROLS WHERE THE PERCENTAGE IS LOCATED
                .attr("y", b.h / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "start")
                .text(percentageString);

            // Make the breadcrumb trail visible, if it's hidden.
            d3.select("#trail")
                .style("visibility", "");

        }

        // Take a 2-column CSV and transform it into a hierarchical structure suitable
        // for a partition layout. The first column is a sequence of step names, from
        // root to leaf, separated by hyphens. The second column is a count of how
        // often that sequence occurred.
        function buildHierarchy(csv) {
            let root = { "name": "root", "children": [] };
            for (let i = 0; i < csv.length; i++) {
                let sequence = csv[i][0];
                let size = +csv[i][1];
                if (isNaN(size)) { // e.g. if this is a header row
                    continue;
                }
                let parts = sequence.split("/");
                let currentNode = root;
                for (let j = 0; j < parts.length; j++) {
                    let children = currentNode["children"];
                    let nodeName = parts[j];
                    let childNode;
                    if (j + 1 < parts.length) {
                        // Not yet at the end of the sequence; move down the tree.
                        let foundChild = false;
                        for (let k = 0; k < children.length; k++) {
                            if (children[k]["name"] == nodeName) {
                                childNode = children[k];
                                foundChild = true;
                                break;
                            }
                        }
                        // If we don't already have a child node for this branch, create it.
                        if (!foundChild) {
                            childNode = { "name": nodeName, "children": [] };
                            children.push(childNode);
                        }
                        currentNode = childNode;
                    } else {
                        // Reached the end of the sequence; create a leaf node.
                        childNode = { "name": nodeName, "size": size };
                        children.push(childNode);
                    }
                }
            }
            return root;
        };

    } // end of drawChart()


    render() {
        // console.log(`this.props.burstData: `, this.props.burstData)
        return <div>
            <div id="main">
                <div id="sequence"></div>
                <div id="chart" className="chart">

                    <svg width={630} height={500} className="#chart" ref={(elem) => { this.svg = elem; }} className="sunburst">
                    </svg>
                    {/*  Explanation: displayed in middle of sunburst */}
                    <div id="explanation" className="explanation">
                        <span id="filename"></span>
                        <br />
                        <span id="percentage"></span>
                        <br />
                        of your bundle
                        <div>
                            Size: <span id="filesize"></span> kb <br />
                        </div>
                    </div>

                </div>{/* end div.chart */}

            </div>

        </div>
    }

}
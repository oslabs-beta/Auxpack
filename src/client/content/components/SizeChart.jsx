import React, { Component } from 'react';
import * as d3 from 'd3';
// import * as d3 from "d3"; << NOT IMPORTING, AS WE'VE BUILT ON d3.v4, as imported in index.html

class SizeChart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //RENDERING CHART WHEN COMPONENT MOUNTS
        this.drawChart();
    }

    drawChart() {
        //CHART MARGINS AND DIMENSIONS
        var margin = {top: 10, right: 30, bottom: 50, left: 60},
            width = 350 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        //APPENDING THE OVERALL SVG CHART
        var svg = d3.select("#size-chart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("class", "build-chart-svg")
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        //TAKING IN THE PASSED DOWN DATA
        let chartData = this.props.chartData;

        //IFFY FUNCTION TO IMMEDIATELY RENDER OUT THE CHART
        (function() {
            //ADDING X-AXIS - BUILD
            var x = d3.scaleTime()
            .domain(d3.extent(chartData, function(d) { return d.build; }))
            .range([ 0, width ]);
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickFormat(d3.format("d")));

            //ADDING Y-AXIS - SIZE
            var y = d3.scaleLinear()
            .domain([0, d3.max(chartData, function(d) { return +d.size; })])
            .range([ height, 0 ]);
            svg.append("g")
            .call(d3.axisLeft(y));

            //ADDING THE LINE
            svg.append("path")
            .datum(chartData)
            .attr("fill", "none")
            .attr("stroke", "rgb(63,81,181)")
            .attr("stroke-width", 1.8)
            .attr("d", d3.line()
                .x(function(d) { return x(d.build) })
                .y(function(d) { return y(d.size) })
                )

            //ADDING X-AXIS LABEL
            svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height + 35)
            .text("build, by size")
            .attr("fill", "rgba(63,81,181,1)");

            //ADDING Y-AXIS LABEL
            svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", -50)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("size\xa0\xa0\xa0\xa0(in kB)")
            .attr("fill", "rgba(63,81,181,1)");

        })()
    }
    
    render() {
        return (
            <div className="single-chart">
                <div id="size-chart"></div>
            </div>
        )
    }
}

export default SizeChart;
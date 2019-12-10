import React, { Component } from 'react';
// import * as d3 from "d3";

class TimeChart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 30, bottom: 30, left: 60},
            width = 300 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#time-chart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        let chartData = this.props.chartData;

        //Read the data
        d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

        // Now I can use this dataset:
        function(data) {
            // Add X axis --> it is a date format
            var x = d3.scaleTime()
            .domain(d3.extent(chartData, function(d) { return d.build; }))
            .range([ 0, width ]);
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

            // Add Y axis
            var y = d3.scaleLinear()
            .domain([0, d3.max(chartData, function(d) { return +d.time; })])
            .range([ height, 0 ]);
            svg.append("g")
            .call(d3.axisLeft(y));

            // Add the line
            svg.append("path")
            .datum(chartData)
            .attr("fill", "none")
            .attr("stroke", "rgb(63,81,181)")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function(d) { return x(d.build) })
                .y(function(d) { return y(d.time) })
                )

        })
    }

    render() {
        return (
            <div className="single-chart">
                <div id="time-chart"></div>
                <p className="chart-label">TIME CHART</p>
            </div>
        )
    }
}

export default TimeChart;
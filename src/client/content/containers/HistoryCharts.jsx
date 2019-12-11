import React, { useState, useEffect } from 'react';
import SizeChart from '../components/SizeChart.jsx';
import TimeChart from '../components/TimeChart.jsx';

const HistoryCharts = ({ build }) => {

    //PARSING PASSED DOWN BUILD DATA INTO SIMPLE OBJECTS FOR CHARTS

    let chartData = build.map((b, i) => {
        return b = {
            'build': i + 1,
            'size': b.size / 1000,
            'time': b.time / 1000,
        }
    })

    return <React.Fragment>
            <div id="chart-container">
                <SizeChart chartData={chartData} />
                <TimeChart chartData={chartData} />
            </div>
        </React.Fragment>
}

export default HistoryCharts;
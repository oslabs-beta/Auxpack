import React, { useState, useEffect } from 'react';
import SizeChart from '../../views/graphs/SizeChart.jsx';
import TimeChart from '../../views/graphs/TimeChart.jsx';

const HistoryCharts = ({ build }) => {

    let chartData = build.map((b, i) => {
        return b = {
            'build': i + 1,
            'size': b.size,
            'time': b.time
        }
    })

    return <React.Fragment>

        <SizeChart chartData={chartData} />
        <TimeChart chartData={chartData} />

    </React.Fragment>
}

export default HistoryCharts;
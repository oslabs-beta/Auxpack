import React from 'react'
import { render } from 'react-dom'
import App from './App'
import stats from '../monitor/stats.json';
render(
    <App stats={stats} />,
    document.getElementById('app')
)
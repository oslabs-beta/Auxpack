import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom";

render(
    (
        <BrowserRouter>
        <App />
        </BrowserRouter>
    ),
    document.getElementById('app')
)
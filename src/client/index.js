import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom";

render(
    (//BrowerRouter initializes react router for the entirety of the application
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    document.getElementById('app')
)
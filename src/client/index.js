import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../assets/css/styles.scss';

render(
  (// BrowerRouter initializes react router for the entirety of the application
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('app'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import MainState from './Context/MainContext/MainState';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainState>
        <App />
      </MainState>
    </React.StrictMode>
  </BrowserRouter>
,
  document.getElementById('root')
);


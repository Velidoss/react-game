import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import GlobalState from './Context/GlobalContext/GlobalState';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalState>
        <App />      
      </GlobalState>
    </React.StrictMode>
  </BrowserRouter>
,
  document.getElementById('root')
);


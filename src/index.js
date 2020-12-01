import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";

import Router from './Pages/Router'


ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

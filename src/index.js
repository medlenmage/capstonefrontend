import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import { CdlSchool } from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CdlSchool />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

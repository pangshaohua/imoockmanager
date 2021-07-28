import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Life from './pages/demo/Life';
// import Admin from './admin'
import reportWebVitals from './reportWebVitals';
import Router from './pages/route_demo/route3/router'



/* ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
); */
ReactDOM.render(
  <Router/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

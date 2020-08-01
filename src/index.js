import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./Components/Header";

ReactDOM.render(
  <React.Fragment>
    <Header />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
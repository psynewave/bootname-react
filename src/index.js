import React from 'react';
import ReactDOM from 'react-dom';
import API from './API';

import App from './components/App'

API.getEntry();

API.getNames();

ReactDOM.render(
  <App />,
  document.getElementById("react")
);

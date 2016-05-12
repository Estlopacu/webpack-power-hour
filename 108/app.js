import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";

var estilos = require('./main.scss');

ReactDOM.render(
  <Hello name="World"/>,
  document.getElementById('app')
);

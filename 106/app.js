import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";

require('./main.css');

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('app')
);

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./scss/index.scss";
import "./scss/reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

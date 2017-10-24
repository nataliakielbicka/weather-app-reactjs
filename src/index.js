import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import "./main.css";

document.addEventListener("DOMContentLoaded", function () {
  ReactDom.render((
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>
  ), document.querySelector("#root"))
});
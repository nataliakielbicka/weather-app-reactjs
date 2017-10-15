import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import "./main.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

document.addEventListener("DOMContentLoaded", function () {
  ReactDom.render((
    <BrowserRouter>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
  ), document.querySelector("#root"))
});
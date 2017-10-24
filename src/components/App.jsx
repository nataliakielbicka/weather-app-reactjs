import React, {Component} from "react";

import Menu from "./views/Menu";
import Title from "./views/Title";
import Main from "./views/Main";
import Footer from "./views/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Menu/>
        <div className="container">
          <Title/>
          <Main/>
        </div>
        <Footer/>
      </div>
    )
  }
}
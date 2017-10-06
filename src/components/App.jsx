import React, {Component} from "react";

import Title from "./views/Title";
import FetchData from "./views/FetchData";
import Footer from "./views/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Title/>
        <FetchData/>
        <Footer/>
      </div>
    )
  }
}
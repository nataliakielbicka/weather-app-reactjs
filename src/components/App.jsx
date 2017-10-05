import React, {Component} from "react";

import Title from "./views/Title";
import SearchInput from "./views/SearchInput";
import FetchData from "./views/FetchData";
import DisplayWeather from "./views/DisplayWeather";
import Footer from "./views/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Title/>
        <SearchInput/>
        <FetchData/>
        <DisplayWeather/>
        <Footer/>
      </div>
    )
  }
}
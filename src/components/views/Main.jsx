import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import FetchData from "./FetchData";
import ShowLocations from "./ShowLocations";
import MyWeather from "./MyWeather";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FetchData}/>
          <Route path="/my-locations" component={ShowLocations}/>
          <Route path="/my-weather" component={MyWeather}/>
        </Switch>
      </div>
    )
  }
}

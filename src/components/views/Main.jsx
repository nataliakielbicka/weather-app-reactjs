import React from "react";
import {Switch, Route} from "react-router-dom";

import FetchData from "./FetchData";
import ShowLocations from "./ShowLocations";
import MyWeather from "./MyWeather";

const Main = () => <Switch>
  <Route exact path="/" component={FetchData}/>
  <Route path="/my-locations" component={ShowLocations}/>
  <Route path="/my-weather" component={MyWeather}/>
</Switch>

export default Main;
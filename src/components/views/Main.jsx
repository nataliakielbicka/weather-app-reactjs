import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import FetchData from "./FetchData";
import MyLocations from "./MyLocations";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FetchData}/>
          <Route path="/my-locations" component={MyLocations}/>
        </Switch>
      </div>
    )
  }
}

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import FetchData from "./FetchData";
import ShowLocations from "./ShowLocations";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FetchData}/>
          <Route path="/show-locations" component={ShowLocations}/>
        </Switch>
      </div>
    )
  }
}

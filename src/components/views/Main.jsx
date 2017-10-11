import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import FetchData from "./FetchData";
import Favourites from "./Favourites";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FetchData}/>
          <Route path="/favourites" component={Favourites}/>
        </Switch>
      </div>
    )
  }
}
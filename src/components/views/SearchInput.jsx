import React, {Component} from "react";

export default class SearchInput extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">Search city:</label>
        <input type="text" name="search" id="search"/>
      </div>
    )
  }
}

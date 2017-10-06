import React, {Component} from "react";

export default class SearchInput extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            value={this.props.cityName}
            onChange={this.props.handleInputChange}
            onKeyDown={this.props.handleKeyPress}/>
          <button onClick={this.props.handleButtonClick}>Search</button>
        </form>
      </div>
    )
  }
}

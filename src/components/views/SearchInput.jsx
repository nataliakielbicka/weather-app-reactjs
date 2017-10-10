import React, {Component} from "react";

export default class SearchInput extends Component {
  render() {
    const {cityName, handleInputChange, handleKeyPress, handleButtonClick} = this.props;
    return (
      <div>
        <form>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            value={cityName}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}/>
          <button onClick={handleButtonClick}>Search</button>
        </form>
      </div>
    )
  }
}

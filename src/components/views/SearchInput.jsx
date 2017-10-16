import React, {Component} from "react";

export default class SearchInput extends Component {
  render() {
    const {cityName, handleInputChange, handleKeyPress, handleButtonClick} = this.props;
    return (
      <form className="form">
        <input className="form__input"
          type="search"
          id="search"
          placeholder="Search a city..."
          value={cityName}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}/>
        <button className="form__btn" onClick={handleButtonClick}>Show the weather</button>
      </form>
    )
  }
}

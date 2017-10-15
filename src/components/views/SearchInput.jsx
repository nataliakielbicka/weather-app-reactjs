import React, {Component} from "react";

export default class SearchInput extends Component {
  render() {
    const {cityName, handleInputChange, handleKeyPress, handleButtonClick} = this.props;
    return (
      <form className="row">
        <div className="col-md-8">
          <input
            type="search"
            id="search"
            placeholder="Search..."
            value={cityName}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}/>
        </div>
        <div className="col-md-4 text-center">
          <button className="btn btn-default" onClick={handleButtonClick}>Search</button>
        </div>

      </form>
    )
  }
}

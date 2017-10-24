import React from "react";

const SearchInput = ({cityName, handleInputChange, handleKeyPress, handleButtonClick}) => <form className="form">
  <input
    className="form__input"
    type="search"
    id="search"
    placeholder="Search a city..."
    value={cityName}
    onChange={handleInputChange}
    onKeyDown={handleKeyPress}/>
  <button className="form__btn" onClick={handleButtonClick}>Show the weather</button>
</form>

export default SearchInput;

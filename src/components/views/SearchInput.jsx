import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

export default class SearchInput extends Component {
  render() {
    const {cityName, handleInputChange, handleKeyPress, handleButtonClick} = this.props;
    return (
      <div>
        <form>
          {/*<input
            type="search"
            id="search"
            placeholder="Search..."
            value={cityName}
            onChange={handleInputChange}
          onKeyDown={handleKeyPress}/>*/}

            <TextField hintText={cityName}
            floatingLabelText={cityName}
            id="search"
            placeholder="Search..."
            value={cityName}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <RaisedButton label="Search" onClick={handleButtonClick} primary={true}/>
        </form>
      </div>
    )
  }
}

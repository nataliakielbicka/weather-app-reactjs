import React, {Component} from "react";

export default class DisplayWeather extends Component {
  render() {
    const {descriptionMain, description, temperature, weatherIcon, name} = this.props;
    return (
      <div className="weather__container">
        <h2 className="weather__header">{name}</h2>
        <span className="weather__temperature">{temperature}
          °C</span>
        {weatherIcon
          ? (<img
            className="weather__icon"
            src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
            alt={`${description}`}/>)
          : null}
        <h4>Sky: {description}</h4>
        <h5>Description: {descriptionMain}</h5>
      </div>
    )
  }
}

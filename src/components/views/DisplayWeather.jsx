import React, {Component} from "react";

export default class DisplayWeather extends Component {
  render() {
    const {descriptionMain, description, temperature, weatherIcon, name} = this.props;
    return (
      <div>
        <h3 className="card-header success-color white-text">{name}</h3>
        <div className="card-body">
          <h4 className="card-title">{temperature}
            °C</h4>
          <p className="card-text">Sky: {description}</p>
          <p className="card-text">Description: {descriptionMain}</p>
          {weatherIcon
            ? (<img
              src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
              alt={`${description}`}/>)
            : null}
        </div>
      </div>
    )
  }
}

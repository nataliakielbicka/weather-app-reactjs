import React, {Component} from "react";

export default class WeatherDesc extends Component {
    render() {
        const {cityName, description, descriptionMain, temperature, weatherIcon} = this.props;
        return (
            <div className="locations">
                <h2>{cityName}</h2>
                <h4>Sky: {description}</h4>
                <h5>Description: {descriptionMain}</h5>
                <span className="temperature">{temperature}
                    °C</span>
                {weatherIcon
                    ? (<img
                        src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                        alt={`${description}`}/>)
                    : null}
            </div>
        )
    }
}

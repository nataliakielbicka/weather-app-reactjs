import React, {Component} from "react";

export default class LocationItem extends Component {
    render() {
        const {descriptionMain, description, temperature, weatherIcon, cityName} = this.props;
        return (
            <li>
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

            </li>
        )
    }
}

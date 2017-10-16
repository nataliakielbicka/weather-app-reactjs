import React, {Component} from "react";

export default class LocationItem extends Component {
    render() {
        const {cityName, getCityWeather} = this.props;
        return (
            <li onClick={getCityWeather}>
                <h2>{cityName.toUpperCase()}</h2>
            </li>
        )
    }
}

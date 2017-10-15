import React, {Component} from "react";

export default class LocationItem extends Component {
    render() {
        const {cityName, getCityWeather} = this.props;
        return (
            <li onClick={getCityWeather} className="card text-center align-self-center">
                <div className="card-body">
                    <h2 className="card-header success-color white-text">{cityName.toUpperCase()}</h2>
                </div>
            </li>
        )
    }
}
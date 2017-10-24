import React, {Component} from "react";

export default class LocationItem extends Component {
    render() {
        const {activeItem, cityName, getCityWeather, removeLocation} = this.props;
        return (
            <li className={`locations__item${activeItem}`}>
                <a href="#city" className="locations__link" onClick={getCityWeather}>{cityName.toUpperCase()}</a>
                <a
                    href="#remove"
                    className="locations__remove"
                    onClick={removeLocation}
                    title="remove this location">x</a>
            </li>
        )
    }
}

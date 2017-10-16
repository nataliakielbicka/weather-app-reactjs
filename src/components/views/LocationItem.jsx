import React, {Component} from "react";

export default class LocationItem extends Component {
    render() {
        const {activeItem, cityName, getCityWeather} = this.props;
        return (
            <li className={"locations__item" + activeItem} onClick={getCityWeather}>
                <a href="#city" className="locations__link">{cityName.toUpperCase()}</a>
            </li>
        )
    }
}

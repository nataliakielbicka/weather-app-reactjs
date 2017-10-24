import React from "react";

const LocationItem = ({activeItem, cityName, getCityWeather, removeLocation}) => <li className={`locations__item${activeItem}`}>
    <a href="#city" className="locations__link" onClick={getCityWeather}>{cityName.toUpperCase()}</a>
    <a
        href="#remove"
        className="locations__remove"
        onClick={removeLocation}
        title="remove this location">x</a>
</li>

export default LocationItem;

import React from "react";

const WeatherDesc = ({
    cityName,
    description,
    descriptionMain,
    temperature,
    weatherIcon,
    tempCelsius = Math.round((temperature - 32) / (9 / 5))
}) => <div className="weather__container">
    <h2 className="weather__header">{cityName}</h2>
    <span className="weather__temperature">{tempCelsius}
        °C {" | "}</span>
    <span className="weather__temperature">{Math.round(temperature)}
        °F</span>
    {weatherIcon
        ? (<img
            className="weather__icon"
            src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
            alt={`${description}`}/>)
        : null}
    <h4>Sky: {description}</h4>
    <h5>Description: {descriptionMain}</h5>
</div>

export default WeatherDesc;

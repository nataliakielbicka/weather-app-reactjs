import React, {Component} from "react";
import axios from "axios";

import LocationItem from "./LocationItem";
import WeatherDescription from "./WeatherDescription";

export default class ShowLocations extends Component {
    constructor() {
        super();
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            cityName: "",
            locationList: JSON.parse(localStorage.getItem('myLocations')) || []
        }
    }
    getCityWeather = (cityName) => {
        const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${API_KEY}`)
            .then(res => {
                this.setState({
                    cityName: res
                        .data
                        .name
                        .toUpperCase(),
                    descriptionMain: res.data.weather[0].main,
                    description: res.data.weather[0].description,
                    temperature: res.data.main.temp,
                    weatherIcon: res.data.weather[0].icon,
                    displayResults: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    removeLocation = (cityName) => {
        let storedLocations = JSON.parse(localStorage.getItem('myLocations'));
        storedLocations = storedLocations.filter((item) => item !== cityName)
        localStorage.setItem('myLocations', JSON.stringify(storedLocations));
        this.setState({locationList: storedLocations})
    }
    render() {
        const myLocations = JSON.parse(localStorage.getItem("myLocations")) || [];
        const locationList = myLocations.map((cityName, i) => {
            let activeItem = ""
            if (cityName.toLowerCase() === this.state.cityName.toLowerCase()) {
                activeItem = " locations__item--active"
            }
            return <LocationItem
                key={i}
                cityName={cityName}
                activeItem={activeItem}
                getCityWeather={this
                .getCityWeather
                .bind(this, cityName)}
                removeLocation={this
                .removeLocation
                .bind(this, cityName)}/>
        });
        const {cityName} = this.state;
        return (
            <div className="my-locations">
                <ul className="locations">
                    {locationList}
                </ul>
                {cityName
                    ? (
                        <div className="weather">
                            <WeatherDescription {...this.state}/>
                        </div>
                    )
                    : null}
            </div>
        )
    }
}

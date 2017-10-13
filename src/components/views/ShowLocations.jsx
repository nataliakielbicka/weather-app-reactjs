import React, {Component} from "react";
import axios from "axios";

import WeatherDescription from "./WeatherDescription";
import LocationItem from "./LocationItem";

export default class ShowLocations extends Component {
    constructor() {
        super();
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            cityName: "",
            name: ""
        }
    }
    getCityWeather = (cityName) => {
        const API_KEY = "e6f4d816d3ade705ec1d8d9701b61e14";
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`)
            .then(res => {
                this.setState({
                    cityName: cityName.toUpperCase(),
                    descriptionMain: res.data.weather[0].main,
                    description: res.data.weather[0].description,
                    temperature: res.data.main.temp,
                    weatherIcon: res.data.weather[0].icon,
                    name: res.data.name,
                    displayResults: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const myLocations = JSON.parse(localStorage.getItem("myLocations")) || [];
        const locationList = myLocations.map((cityName, i) => {
            return <LocationItem
                key={i}
                cityName={cityName}
                getCityWeather={this
                .getCityWeather
                .bind(this, cityName)}/>
        });
        const {cityName} = this.state;
        return (
            <div>
                <ul className="locations">
                    {locationList}
                </ul>
                {cityName
                    ? (<WeatherDescription {...this.state}/>)
                    : null}
            </div>
        )
    }
}

import React, {Component} from "react";
import axios from "axios";

import WeatherDescription from "./WeatherDescription";

export default class MyWeatherData extends Component {
    constructor() {
        super();
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            cityName: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.lat !== this.props.lat || nextProps.lon !== this.props.lon) {
            this.getMyWeather(nextProps);
        }
    }

    getMyWeather = (props) => {
        const lat = props.lat;
        const lon = props.lon;
        const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&units=metric&lat=${lat}&lon=${lon}`;
        axios
            .get(weatherURL)
            .then(res => {
                this.setState({descriptionMain: res.data.weather[0].main, description: res.data.weather[0].description, temperature: res.data.main.temp, weatherIcon: res.data.weather[0].icon, cityName: res.data.name});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const {cityName, description, descriptionMain, temperature, weatherIcon} = this.state;
        return (<WeatherDescription {...this.state}/>)
    }
}

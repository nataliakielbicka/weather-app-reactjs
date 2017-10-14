import React, {Component} from "react";
import axios from "axios";

export default class MyWeatherData extends Component {
    constructor() {
        super();
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            name: ""
        }
    }
    componentDidUpdate = () => {
        this.getMyWeather();
    }

    getMyWeather = () => {
        const lat = this.props.lat;
        const lon = this.props.lon;
        const API_KEY = "e6f4d816d3ade705ec1d8d9701b61e14";
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&units=metric&lat=${lat}&lon=${lon}`;
        // const weatherURL =
        // "https://api.openweathermap.org/data/2.5/weather?APPID=bd5e378503939ddaee76f1
        // 2 ad7a97608&units=metric&lat=50.015450099999995&lon=20.0110113"
        axios
            .get(weatherURL)
            .then(res => {
                this.setState({descriptionMain: res.data.weather[0].main, description: res.data.weather[0].description, temperature: res.data.main.temp, weatherIcon: res.data.weather[0].icon, name: res.data.name});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const {descriptionMain, description, temperature, weatherIcon, name} = this.state;
        return (
            <div>
                <h2>Weather for: {name}</h2>
                <h4>Sky: {description}</h4>
                <h5>Description: {descriptionMain}</h5>
                <span className="temperature">{temperature}
                    °C</span>
                {weatherIcon
                    ? (<img
                        src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                        alt={`${description}`}/>)
                    : null}

            </div>
        )
    }
}

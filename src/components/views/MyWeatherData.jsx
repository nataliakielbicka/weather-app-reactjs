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

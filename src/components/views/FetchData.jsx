import React, {Component} from "react";
import axios from "axios";

export default class FetchData extends Component {
    constructor() {
        super();
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: ""
        }
    }
    componentDidMount() {
        axios
            .get("http://api.openweathermap.org/data/2.5/weather?q=Cracow&units=metric&APPID=e6f4d" +
                "816d3ade705ec1d8d9701b61e14")
            .then(res => {
                this.setState({descriptionMain: res.data.weather[0].main, description: res.data.weather[0].description, temperature: res.data.main.temp, weatherIcon: res.data.weather[0].icon});
                //console.log(res.data.weather[0].main)
            })
    }
    render() {
        const {descriptionMain, description, temperature, weatherIcon} = this.state;
        return (
            <div>
                <h4>Sky: {description}</h4>
                <h5>Description: {descriptionMain}</h5>
                <span className="temperature">{temperature}
                    °C</span>
                <img
                    src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                    alt={`${description}`}/>
            </div>
        )
    }
}

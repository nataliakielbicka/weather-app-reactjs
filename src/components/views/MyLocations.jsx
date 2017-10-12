import React, {Component} from "react";
import axios from "axios";

import ShowLocations from "./ShowLocations";

export default class MyLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            cityName: "",
            name: ""
        }
    }
    addToLocalStorage = (e) => {
        e.preventDefault();
        const locations = JSON.parse(localStorage.getItem("myLocations")) || [];
        if (locations.indexOf(this.props.myNewLocation) === -1) {
            const myLocations = [
                this.props.myNewLocation, ...locations
            ];
            localStorage.setItem("myLocations", JSON.stringify(myLocations));
            const API_KEY = "e6f4d816d3ade705ec1d8d9701b61e14";
            myLocations.map(v => {
                return axios
                    .get(`https://api.openweathermap.org/data/2.5/weather?q=${v}&units=metric&APPID=${API_KEY}`)
                    .then(res => {
                        this.setState({
                            descriptionMain: res.data.weather[0].main,
                            description: res.data.weather[0].description,
                            temperature: res.data.main.temp,
                            weatherIcon: res.data.weather[0].icon,
                            name: res.data.name,
                            displayResults: true
                        });
                        // console.log(res.data.weather[0].main)
                    });
            })
        }

    }
    render() {
        return (
            <div>
                <button
                    onClick={this
                    .addToLocalStorage
                    .bind(this)}>Add to my Locations</button>
            </div>
        )
    }
}

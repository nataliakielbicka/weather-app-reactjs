import React, {Component} from "react";
import axios from "axios";

import DisplayWeather from "./DisplayWeather";
import SearchInput from "./SearchInput";

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            cityName: "",
            displayResults: false
        }
        this.handleInputChange = this
            .handleInputChange
            .bind(this)
        this.handleKeyPress = this
            .handleKeyPress
            .bind(this)
        this.handleButtonClick = this
            .handleButtonClick
            .bind(this)

    }
    fetchData = () => {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=metric&APPID=e6f4d816d3ade705ec1d8d9701b61e14`;
        //console.log(apiURL)
        axios
            .get(apiURL)
            .then(res => {
                this.setState({descriptionMain: res.data.weather[0].main, description: res.data.weather[0].description, temperature: res.data.main.temp, weatherIcon: res.data.weather[0].icon});
            })
    }
    handleInputChange(e) {
        this.setState({cityName: e.target.value});
        if (e.target.value === "") {
            this.setState({displayResults: false})
        }
    }

    handleKeyPress(e) {
        if ((e.keyCode === "13") && (this.state.cityName !== "")) {
            this.fetchData();
        }
    }

    handleButtonClick(e) {
        if (this.state.cityName !== "") {
            this.setState({displayResults: true});
            this.fetchData();
        }
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <SearchInput
                    cityName={this.state.cityName}
                    handleInputChange={this.handleInputChange}
                    handleKeyPress={this.handleKeyPress}
                    handleButtonClick={this.handleButtonClick}/> {this.state.displayResults
                    ? (<DisplayWeather {...this.state}/>)
                    : null}
            </div>
        )
    }
}

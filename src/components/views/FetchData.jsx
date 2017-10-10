import React, {Component} from "react";
import axios from "axios";

import DisplayWeather from "./DisplayWeather";
import SearchInput from "./SearchInput";
import DisplayAlert from "./DisplayAlert";

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            cityName: "",
            name: "",
            displayResults: false,
            alertDisplay: false
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
    showWeather = () => {
        const CITY_LIST = "city-list.json";
        const {cityName} = this.state;
        axios
            .get(CITY_LIST)
            .then(res => {
                let cityNameList = res
                    .data
                    .map(i => i.name)
                if (cityNameList.includes(cityName)) {
                    const API_KEY = "e6f4d816d3ade705ec1d8d9701b61e14";
                    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`;
                    axios
                        .get(apiURL)
                        .then(res => {
                            this.setState({
                                descriptionMain: res.data.weather[0].main,
                                description: res.data.weather[0].description,
                                temperature: res.data.main.temp,
                                weatherIcon: res.data.weather[0].icon,
                                name: res.data.name,
                                displayResults: true
                            });
                        });
                } else {
                    this.setState({alertDisplay: true})
                }

            })
            .catch(error => {
                console.log('error');
            });
    }
    handleInputChange(e) {
        this.setState({cityName: e.target.value, alertDisplay: false});
        if (e.target.value === "") {
            this.setState({displayResults: false})
        }
    }

    handleKeyPress(e) {
        if ((e.keyCode === "13") && (this.state.cityName !== "")) {
            this.showWeather();
        }
    }

    handleButtonClick(e) {
        e.preventDefault();
        if (this.state.cityName !== "") {
            this.showWeather();
            this.setState({alertDisplay: false})
        }
    }
    render() {
        const {displayResults, alertDisplay} = this.state;
        return (
            <div>
                <SearchInput
                    cityName={this.state.cityName}
                    handleInputChange={this.handleInputChange}
                    handleKeyPress={this.handleKeyPress}
                    handleButtonClick={this.handleButtonClick}/> {alertDisplay
                    ? (<DisplayAlert/>)
                    : null}
                {displayResults
                    ? (<DisplayWeather {...this.state}/>)
                    : null}
            </div>
        )
    }
}

import React, {Component} from "react";
import axios from "axios";

import WeatherDescription from "./WeatherDescription";
import SearchInput from "./SearchInput";
import DisplayAlert from "./DisplayAlert";
import MyLocations from "./MyLocations";

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionMain: "",
            description: "",
            temperature: null,
            weatherIcon: "",
            cityName: "",
            displayResults: false,
            alertDisplay: false,
            loading: false
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
        this.setState({loading: true});
        const CITY_LIST = "city-list.json";
        const {cityName} = this.state;
        axios
            .get(CITY_LIST)
            .then(res => {
                // let cityNameList = res     .data     .map(i => i.name) let
                // cityNameListLowerCase = res     .data     .map(i => i.name.toLowerCase()) if
                // (cityNameList.includes(cityName) || cityNameListLowerCase.includes(cityName))
                // {
                const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${API_KEY}`;
                axios
                    .get(apiURL)
                    .then(res => {
                        this.setState({
                            cityName: res.data.name,
                            descriptionMain: res.data.weather[0].main,
                            description: res.data.weather[0].description,
                            temperature: res.data.main.temp,
                            weatherIcon: res.data.weather[0].icon,
                            displayResults: true,
                            loading: false
                        });
                    });
                // } else {     this.setState({alertDisplay: true}) }
            })
            .catch(error => {
                console.log(error);
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
        const {displayResults, alertDisplay, cityName, loading} = this.state;
        return (
            <div>
                <SearchInput
                    cityName={this.state.cityName}
                    handleInputChange={this.handleInputChange}
                    handleKeyPress={this.handleKeyPress}
                    handleButtonClick={this.handleButtonClick}/> {alertDisplay
                    ? (<DisplayAlert/>)
                    : null}
                {loading
                    ? <h3 className="loading">loading weather...</h3>
                    : null}
                {displayResults
                    ? (
                        <div className="weather">
                            <WeatherDescription {...this.state}/>
                            <MyLocations myNewLocation={cityName}/>
                        </div>
                    )
                    : null}
            </div>
        )
    }
}

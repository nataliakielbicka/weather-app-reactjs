import React, {Component} from "react";

import MyWeatherData from "./MyWeatherData";
import GoogleMap from "./GoogleMap";

export default class MyWeather extends Component {
    constructor() {
        super();
        this.state = {
            latitude: "",
            longitude: ""
        }
        this.getMyLocation = this
            .getMyLocation
            .bind(this)
    }
    componentDidMount() {
        this.getMyLocation();
    }
    getMyLocation = () => {
        this.setState({latitude: 52.23, longitude: 21.01})
        const location = window.navigator && window.navigator.geolocation
        if (location) {
            location.getCurrentPosition(pos => {
                this.setState({latitude: pos.coords.latitude, longitude: pos.coords.longitude})
            }, (error) => {
                this.setState({latitude: 52.23, longitude: 21.01})
            })
        }
    }

    render() {
        const {latitude, longitude} = this.state;
        return (
            <div className="my-weather">
                <div className="weather">
                    <MyWeatherData lat={latitude} lon={longitude}/>
                </div>
                <GoogleMap lat={latitude} lon={longitude}/>
            </div>
        )
    }
}

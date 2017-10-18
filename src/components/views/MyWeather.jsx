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
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition(pos => {
                this.setState({latitude: pos.coords.latitude, longitude: pos.coords.longitude})
            }, (error) => {
                this.setState({latitude: "err-latitude", longitude: "err-longitude"})
            })
        }
    }

    render() {
        const {latitude, longitude} = this.state;
        return (
            <div>
                <div className="weather">
                    <MyWeatherData lat={latitude} lon={longitude}/>
                </div>
                <GoogleMap lat={latitude} lon={longitude}/>
            </div>
        )
    }
}

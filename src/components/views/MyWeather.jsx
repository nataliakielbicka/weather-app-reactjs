import React, {Component} from "react";
import axios from "axios";

import MyGeoLocation from "./MyGeoLocation";

export default class MyWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myIP: ""
        }
    }
    componentDidMount = () => {
        this.getMyIp()
    }

    getMyIp = () => {
        const ipURL = "https://api.ipify.org/?format=json";
        axios
            .get(ipURL)
            .then(res => {
                this.setState({myIP: res.data.ip});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const {myIP} = this.state;
        return (
            <div>
                <MyGeoLocation myIp={myIP}/>
            </div>
        )
    }
}

import React, {Component} from "react";
import axios from "axios";

export default class MyGeoLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myGeoLatitude: "",
            myGeoLongitude: ""
        }
    }
    componentDidUpdate = () => {
        this.getMyGeo();
    }

    getMyGeo = () => {
        const ip = this.props.myIp;
        const geoURL = `https://freegeoip.net/json/${ip}`;
        axios
            .get(geoURL)
            .then(res => {
                this.setState({myGeoLatitude: res.data.latitude, myGeoLongitude: res.data.longitude});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const {myIp} = this.props;
        const {myGeoLatitude, myGeoLongitude} = this.state;
        return (
            <div>
                <h2>
                    {myIp}
                </h2>
                {myGeoLatitude}, {myGeoLongitude}
            </div>
        )
    }
}

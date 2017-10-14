import React, {Component} from "react";

const google = window.google;

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 16
        }
    }
    componentDidMount() {
        this.map = this.createMap();
        this.marker = this.createMarker();
    }
    componentDidUnMount() {
        google
            .maps
            .event
            .clearListeners(this.map, "zoom_changed");
    }

    createMap() {
        let mapOptions = {
            zoom: this.state.zoom,
            center: this.mapCenter()
        }
        return new google
            .maps
            .Map(this.refs.mapCanvas, mapOptions)
    }
    mapCenter() {
        // return new google     .maps     .LatLng(this.props.lat, this.props.lng)
        return new google
            .maps
            .LatLng(50.015454999999996, 20.010992899999998)
    }
    createMarker() {
        return new google
            .maps
            .Marker({
                position: this.mapCenter(),
                map: this.map
            })
    }
    render() {
        return (
            <div className="google-map">
                <div className="google-map-canvas" ref="mapCanvas"></div>
            </div>
        )
    }
}
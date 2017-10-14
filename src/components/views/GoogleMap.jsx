import React, {Component} from "react";

const google = window.google;

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 16
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.lat !== this.props.lat || nextProps.lon !== this.props.lon) {
            this.map = this.createMap(nextProps);
            this.marker = this.createMarker(nextProps);
        }
    }
    componentDidUnMount() {
        google
            .maps
            .event
            .clearListeners(this.map, "zoom_changed");
    }

    createMap = (props) => {
        let mapOptions = {
            zoom: this.state.zoom,
            center: this.mapCenter(props)
        }
        return new google
            .maps
            .Map(this.refs.mapCanvas, mapOptions)
    }
    mapCenter = (props) => {
        return new google
            .maps
            .LatLng(props.lat, props.lon)
    }
    createMarker = (props) => {
        return new google
            .maps
            .Marker({
                position: this.mapCenter(props),
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
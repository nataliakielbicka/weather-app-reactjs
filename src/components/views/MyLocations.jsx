import React, {Component} from "react";

export default class MyLocations extends Component {
    addToLocalStorage = (e) => {
        e.preventDefault();
        const locations = JSON.parse(localStorage.getItem("myLocations")) || [];
        if (locations.indexOf(this.props.myNewLocation) === -1) {
            const myLocations = [
                this.props.myNewLocation, ...locations
            ];
            localStorage.setItem("myLocations", JSON.stringify(myLocations));
        }
    }
    render() {
        return (
            <button
                onClick={this
                .addToLocalStorage
                .bind(this)}>Add to my Locations</button>
        )
    }
}

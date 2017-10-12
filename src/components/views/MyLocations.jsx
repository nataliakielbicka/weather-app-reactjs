import React, {Component} from "react";

export default class MyLocations extends Component {
    addToLocalStorage = (e) => {
        e.preventDefault();
        const locations = JSON.parse(localStorage.getItem('myLocations')) || [];
        const myLocations = [
            this.props.myNewLocation, ...locations
        ];
        localStorage.setItem('myLocations', JSON.stringify(myLocations));
    }
    render() {
        return (
            <div>
                <button onClick={this.addToLocalStorage}>Add to my Locations</button>
            </div>
        )
    }
}

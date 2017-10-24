import React, {Component} from "react";

import InLocalStorage from "./InLocalStorage";

export default class MyLocations extends Component {
    constructor() {
        super();
        this.state = {
            addedToLocalStorage: false
        }
    }
    addToLocalStorage = (e) => {
        e.preventDefault();
        const locations = JSON.parse(localStorage.getItem("myLocations")) || [];
        if (locations.indexOf(this.props.myNewLocation) === -1) {
            const myLocations = [
                this.props.myNewLocation, ...locations
            ];
            localStorage.setItem("myLocations", JSON.stringify(myLocations));
            this.setState({addedToLocalStorage: true})
        }
    }
    render() {
        const {addedToLocalStorage} = this.state;
        const locations = JSON.parse(localStorage.getItem("myLocations")) || [];
        return (
            <div className="weather__addto">
                {locations.includes(this.props.myNewLocation) && addedToLocalStorage === false
                    ? <span className="weather__info">Already added to My locations</span>
                    : <button
                        className="weather__btn"
                        onClick={this
                        .addToLocalStorage
                        .bind(this)}>Add to my Locations</button>}
                {addedToLocalStorage
                    ? <InLocalStorage/>
                    : null}
            </div>
        )
    }
}

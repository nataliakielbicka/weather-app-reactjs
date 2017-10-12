import React, {Component} from "react";
import LocationItem from "./LocationItem";

export default class ShowLocations extends Component {
    render() {
        const myLocations = JSON.parse(localStorage.getItem('myLocations')) || [];
        //console.log(myLocations)
        const locationList = myLocations.map((location, index) => {
            return <LocationItem key={index} location={location}/>
        })
        return <div>
            <ul>
                {locationList}
            </ul>
        </div>
    }
}

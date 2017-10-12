import React, {Component} from "react";
import LocationItem from "./LocationItem";

export default class ShowLocations extends Component {
    render() {
        const myLocations = JSON.parse(localStorage.getItem('myLocations')) || [];
        //console.log(myLocations)
        const locationList = myLocations.map((elem, i) => {
            return <LocationItem key={i} cityName={elem.cityName} temperature={elem.temperature} weatherIcon={elem.weatherIcon} description={elem.description} descriptionMain={elem.descriptionMain}/>
        })
        return (
            <ul>
                {locationList}
            </ul>
        )
    }
}

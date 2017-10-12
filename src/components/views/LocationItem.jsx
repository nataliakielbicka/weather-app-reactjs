import React, {Component} from "react";

export default class LocationItem extends Component {
    render() {
        return (
            <li>
                {this.props.location}
            </li>
        )
    }
}

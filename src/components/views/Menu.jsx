import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark indigo">
                <button className="navbar-toggler"><span className="navbar-toggler-icon"/></button>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link waves-effect waves-light">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/my-locations" className="nav-link waves-effect waves-light">My locations</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/my-weather" className="nav-link waves-effect waves-light">My weather</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

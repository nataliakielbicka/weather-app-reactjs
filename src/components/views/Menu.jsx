import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar__menu menu">
                    <li className="menu__item">
                        <Link to="/" className="menu__link">Home</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/my-locations" className="menu__link">My locations</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/my-weather" className="menu__link">My weather</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

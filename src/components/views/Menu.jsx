import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favourites">Favourites</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}
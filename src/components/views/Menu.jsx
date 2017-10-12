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
                        <Link to="/show-locations">My locations</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}

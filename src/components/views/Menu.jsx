import React from "react";
import {Link} from "react-router-dom";

const Menu = () => <nav className="navbar">
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

export default Menu;

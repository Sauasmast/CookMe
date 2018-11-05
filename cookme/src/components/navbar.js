import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
    return(     
            <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">  Cook Me </Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/">Cook</NavLink></li>
                </ul>
            </div>
            </nav>
    )
}

export default Navbar;
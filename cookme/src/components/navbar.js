import React ,  { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
    return(     
            <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo right">  Cook Me </Link>
                <ul className="left">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/">Cook</NavLink></li>
                </ul>
            </div>
            </nav>

    )
    }
}

export default Navbar;
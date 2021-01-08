import React from 'react'
import  '../../styles/Cart.css';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <ul className="menu row">
                    <li className="col"><NavLink to="/computacion" className="nav-link">Computación</NavLink></li>
                    <li className="col"><NavLink to="/fotografia" className="nav-link">Fotografía</NavLink></li>
                    <li className="col"><NavLink to="/audio" className="nav-link">Audio</NavLink></li>
                </ul>
                <div className="navbar-text">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}
export default NavBar
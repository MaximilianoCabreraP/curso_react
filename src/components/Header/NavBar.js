import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';
import  '../../styles/Cart.css';

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <ul className="menu row">
                    <li className="col"><NavLink to="/categorias/computacion" className="nav-link">Computación</NavLink></li>
                    <li className="col"><NavLink to="/categorias/fotografia" className="nav-link">Fotografía</NavLink></li>
                    <li className="col"><NavLink to="/categorias/audio" className="nav-link">Audio</NavLink></li>
                </ul>
                <div className="navbar-text">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}
export default NavBar
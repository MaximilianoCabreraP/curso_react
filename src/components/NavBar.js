import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/Cart.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <ul className="menu row">
                    <li className="col"><a href="#computacion" className="nav-link active">Computación</a></li>
                    <li className="col"><a href="#fotografia" className="nav-link">Fotografía</a></li>
                    <li className="col"><a href="#audio" className="nav-link">Audio</a></li>
                </ul>
                <div className="navbar-text">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}
export default NavBar
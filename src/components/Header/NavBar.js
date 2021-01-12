import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';
import  '../../styles/Cart.css';
import productos from '../../Assets/Products.js'

const NavBar = () => {
    let categorias = [];
    productos.forEach((producto) => {
        let nombreCategoria = producto.nombreCategoria.charAt(0).toUpperCase() + producto.nombreCategoria.slice(1)
        if(!categorias.includes(nombreCategoria)){
            categorias.push(nombreCategoria)
        }
    })

    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <ul className="menu row">
                {
                    categorias.map((categoria) => (
                        <li className="col" key={categoria}>
                            <NavLink to={`/categorias/${categoria.toLowerCase()}`} className="nav-link">
                                {categoria}
                            </NavLink>
                        </li>
                    ))
                }
                </ul>
                <div className="navbar-text">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}
export default NavBar
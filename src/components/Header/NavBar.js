import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';
import  '../../styles/Cart.css';
import productos from '../../Assets/Products.js'


import UserContext from '../../context/UserContext'

const NavBar = () => {
    const { usuario, logueado, logout } = useContext(UserContext);
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuLogueado, setShowMenuLogueado] = useState(false);

    const handleDropdown = (e) => {
        e.preventDefault();
        if(e.target.name==="mostrarCategorias"){
            setShowMenuLogueado(false);
            setShowMenu(!showMenu);
        }else if(e.target.name==="mostrarMenuLogueado"){
            setShowMenu(false);
            setShowMenuLogueado(!showMenuLogueado);
        }else{
            setShowMenu(false);
            setShowMenuLogueado(false);
        }
    }

    let categorias = [];
    productos.forEach((producto) => {
        let nombreCategoria = producto.nombreCategoria.charAt(0).toUpperCase() + producto.nombreCategoria.slice(1)
        if(!categorias.includes(nombreCategoria)){
            categorias.push(nombreCategoria)
        }
    })

    return(
        <>
            <nav className="navbar navbar-light bg-light" onClick={handleDropdown}>
                <ul className="menu row">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" name="mostrarCategorias" href="/" role="button">Categorias</a>
                        {!showMenu?
                            (
                                ""
                            ): (
                                <div className="dropdown-menu show">
                                    <ul className="menu">
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
                                </div>
                            )
                        }
                    </li>
                </ul>
                <ul></ul>
                <ul></ul>
                <ul className="menu row">
                    <li>
                        <NavLink to="/mis-pedidos" className="nav-link left-nav-bar">
                            Mis Pedidos
                        </NavLink>
                    </li>
                    {logueado?
                        (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" name="mostrarMenuLogueado" href="/" role="button">{usuario.apellido}, {usuario.nombre}</a>
                                {!showMenuLogueado?
                                    (
                                        ""
                                    ): (
                                        <div className="dropdown-menu show">
                                            <ul className="menu">
                                                <li>
                                                    <NavLink to="/wishlist" className="nav-link left-nav-bar">
                                                        WishList
                                                    </NavLink>
                                                </li>
                                                <div className="dropdown-divider"></div>
                                                <li>
                                                    <button onClick={logout}>Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    )
                                }
                                
                            </li>
                            
                        ): (
                            <>
                                <li>
                                    <NavLink to="/register" className="nav-link left-nav-bar">
                                        Registrarse
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" className="nav-link left-nav-bar">
                                        LogIn
                                    </NavLink>
                                </li>
                            </>
                        )
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
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../../styles/Cart.css";
//import productos from "../../Assets/Products.js";


import UserContext from "../../context/UserContext";

const NavBar = ( {categorias} ) => {
  const { usuario, logueado, logout } = useContext(UserContext);
  const [showMenuLogueado, setShowMenuLogueado] = useState(false);
  const [dropDownClass, setDropDownClass] = useState("dropdown-menu menu");

  const handleDropdown = (e) => {
    e.preventDefault();
    if (e.target.name === "mostrarCategorias") {
      let newDDClass = dropDownClass;
      if(newDDClass.includes("show")){
        newDDClass="dropdown-menu";
      }else{
        newDDClass += " show";
      }
      setDropDownClass(newDDClass);
    } else if (e.target.name === "mostrarMenuLogueado") {
      setShowMenuLogueado(!showMenuLogueado);
    } else {
      setDropDownClass("dropdown-menu menu")
      setShowMenuLogueado(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" onClick={handleDropdown}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto" onClick={handleDropdown}>
          <li className="nav-item dropdown">
            <a
              id="dropDownCategorias"
              name="mostrarCategorias"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/"
              role="button"
            >
              Categorías
            </a>
            <div className={dropDownClass}>
              <ul className="menu">
                {
                  categorias.map((categoria) => (
                    <NavLink to={`/categorias/${categoria.slug}`} className="nav-link dropDownCategory" key={categoria.nombre}>
                      <li className="navbar-text text-dropdown ">
                        {categoria.nombre}
                      </li>
                    </NavLink>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
        <ul className="menu row">
            <li>
                <NavLink to="/mis-pedidos" className="nav-link right-nav-bar">
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
                                            <NavLink to="/wishlist" className="nav-link right-nav-bar">
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
                            <NavLink to="/register" className="nav-link right-nav-bar">
                                Registrarse
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="nav-link right-nav-bar">
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
      </div>
    
        </nav>
  );
};
export default NavBar;

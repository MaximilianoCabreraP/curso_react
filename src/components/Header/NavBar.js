import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../../styles/Cart.css";

import Dropdown from 'react-bootstrap/dropdown'

import UserContext from "../../context/UserContext";

const NavBar = ( {categorias} ) => {
  const { usuario, logueado, logout } = useContext(UserContext);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      <div className="navbar-collapse">
        <div className="navbar-nav mr-auto">
            <Dropdown>
              <Dropdown.Toggle className="nav-link right-nav-bar" variant="">
                Categorías
              </Dropdown.Toggle>
              <Dropdown.Menu>{
                  categorias.map((categoria) => (
                    <Dropdown.Item as="span" bsPrefix="none">
                      <NavLink to={`/categorias/${categoria.slug}`} className="nav-link right-nav-bar" key={categoria.nombre}>
                        {categoria.nombre}
                      </NavLink>
                  </Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="navbar-nav">
          <NavLink to="/mis-pedidos" className="nav-link right-nav-bar">
              Mis Pedidos
          </NavLink>
            {logueado?
              (
                <Dropdown>
                  <Dropdown.Toggle as="a" href="#" className="nav-link right-nav-bar" variant="">
                    {usuario.apellido}, {usuario.nombre}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as="span" bsPrefix="none">
                      <NavLink to="/wishlist" className="nav-link right-nav-bar">
                        WishListss
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item as="span" bsPrefix="none"><NavLink to="/prueba" className="nav-link right-nav-bar">Prueba</NavLink></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="a" href="/" onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ): (
                  <>
                    <NavLink to="/register" className="nav-link right-nav-bar">
                        Registrarse
                    </NavLink>
                    <NavLink to="/login" className="nav-link right-nav-bar">
                        LogIn
                    </NavLink>
                  </>
              )
            }
        </div>
            
        
        <div className="navbar-text">
            <CartWidget />
        </div>
      </div>
    
        </nav>
  );
};
export default NavBar;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import CartWidget from "./CartWidget";
import UserContext from "../../context/UserContext";

import Dropdown from 'react-bootstrap/Dropdown'
import { Navbar, Nav, NavDropdown }  from 'react-bootstrap'

import "../../styles/Cart.css";

const NavBar = ( {categorias} ) => {
  const { usuario, logueado, logout } = useContext(UserContext);
 
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container">
            <Dropdown>
              <Dropdown.Toggle as="a" href="#" className="nav-link right-nav-bar" variant="">
                Categorías
              </Dropdown.Toggle>
              <Dropdown.Menu>{
                  categorias.map((categoria) => (
                    <Dropdown.Item as="span" bsPrefix="none" key={categoria.nombre}>
                      <NavLink to={`/categorias/${categoria.slug}`} className="nav-link right-nav-bar">
                        {categoria.nombre}
                      </NavLink>
                    </Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
            <div className="navbar-nav">
              <NavLink to="/mis-pedidos" className="nav-link right-nav-bar">
                  Mis Pedidos
              </NavLink>
              {logueado?
                (
                  <NavDropdown  className="right-nav-bar" title={`${usuario.apellido}, ${usuario.nombre}`} id="basic-nav-dropdown">
                    <Dropdown.Item as="span" bsPrefix="none">
                      <NavLink to="/wishlist" className="nav-link right-nav-bar">
                        WishListss
                      </NavLink>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item as="a" href="/" onClick={logout}>Logout</Dropdown.Item>
                  </NavDropdown>
                ):(
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
              <div className="navbar-text">
                <CartWidget />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;
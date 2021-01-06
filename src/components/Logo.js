import React from 'react'
<<<<<<< Updated upstream:src/components/Logo.js
import logo from "../logo.svg";
=======
import { NavLink } from 'react-router-dom';
import logo from "../../logo.svg";
>>>>>>> Stashed changes:src/components/Header/Logo.js

const Logo = () => {
    return (
            <NavLink to="/" exact>
                <img src={logo} className="logo" alt="logo" />
            </NavLink>
    )
}

export default Logo

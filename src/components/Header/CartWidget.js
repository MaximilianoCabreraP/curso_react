import React from 'react'
import cart from "../../images/cart.svg"
import { Link } from "react-router-dom"
const CartWidget = () => {
    return (
        <>
            <Link to="#carrito" className="cart-icon" disabled>
                <img src={cart} alt="Cart" />
                <span className="badge badge-secondary quantity">0</span>
            </Link>
        </>
    )
}

export default CartWidget

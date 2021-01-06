import React from 'react'
import cart from "../../images/cart.svg"

const CartWidget = () => {
    return (
        <>
            <a href="#carrito" className="cart-icon">
                <img src={cart} alt="Cart" />
                <span className="badge badge-secondary quantity">0</span>
            </a>
        </>
    )
}

export default CartWidget

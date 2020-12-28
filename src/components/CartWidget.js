import React from 'react'
import cart from "../images/cart.svg"

const CartWidget = () => {
    return (
        <>
            <a href="#" className="cart-icon">
                <img src={cart} alt="Cart" />
            </a>
        </>
    )
}

export default CartWidget

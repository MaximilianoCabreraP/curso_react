import React, { useContext } from 'react'
import cart from "../../images/cart.svg"
import CartContext from '../../context/CartContext'
import { Link } from "react-router-dom"
const CartWidget = () => {
    const { cantItems } = useContext(CartContext);
    return (
        <>
            <Link to="/cart" className="cart-icon" disabled>
                <img src={cart} alt="Cart" />
                <span className="badge badge-secondary quantity">{cantItems>0 && cantItems}</span>
            </Link>
        </>
    )
}

export default CartWidget

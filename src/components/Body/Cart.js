import React, { useContext } from 'react'

import CartContext from '../../context/CartContext'


const Cart = () => {
    const { cart, inCart } = useContext(CartContext);
    console.log(cart)
    return (
        <div className="cart-cart">{
            cart.map((carrito => 
                carrito.map((item) => item.title)
            ))
        }
        </div>
    )
}

export default Cart

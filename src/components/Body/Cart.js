import React, { useContext } from 'react'

import ItemCarrito from './ItemCarrito'
import TotalCarrito from './TotalCarrito'
import CartContext from '../../context/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            <div id="resumen-cart-fijo">
                <h1 className="tit-cart">Resumen de tu pedido</h1>{
                cart.length ?
                    (
                        <>
                            {
                                cart.map((carrito => [
                                    <ItemCarrito item={carrito.item} cantidad={carrito.cantidad} />
                                ]))
                            }
                            <div className="separador"></div>
                            <TotalCarrito />
                        </>
                    )
                :
                    "No hay items"}
            </div>
        </>
    )
}

export default Cart

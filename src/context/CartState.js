import React, { useState } from 'react'
import CartContext from './CartContext'

//export const CartContextProvider = () => useContext(CartContext)

export const CartState = props => {
    const [cart, setCart] = useState([])
    const [ inCart, setInCart ] = useState(false)

    const addToCart = (obj) => {
        console.dir("1-Cart: "+cart)
		setCart([
			...cart,
			{
                item: obj.item,
				cantidad: obj.cantidad
			}
		])
        setInCart(obj.item.id, true)
    }
    
    const eliminarProducto = id => {
        console.log("Eliminar Producto")
    }

    return (
        <CartContext.Provider value={{addToCart, eliminarProducto, inCart, cart}}>
            {props.children}
        </CartContext.Provider>
    )
}

import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'

export const CartState = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cantItems, setCantItems] = useState(0)
    const [total, setTotal] = useState(0)

    const addToCart = ({item, cantidad}) => {
		setCart([
			...cart,
			{
                item: item,
				cantidad: cantidad
			}
        ])
    }
    const isInCart = id => {
        let existe = cart.find(producto => producto.item.id === id)
        return existe?true:false
    }
    const removeItem = id => {
        const nuevoCart = cart.filter(producto => producto.item.id !== id)
        setCart(nuevoCart)
    }
    const clearCart = () =>{
        setCart([])
    }
    const actualizarCantidad = (id, cantidad) =>{
        const oldCart = cart
        const newCart = oldCart.map(p => {
            if(p.item.id === id){
                p.cantidad = cantidad
            }
            return p
        })
        setCart( newCart )
    }
    
    useEffect(() => {
        let total = 0
        const totales = cart.map( producto => producto.item.price * producto.cantidad )
        totales.map( t => total += t)
        setTotal(total)

        setCantItems(cart.length)
    }, [cart])

    return (
        <CartContext.Provider value={{addToCart, isInCart, removeItem, clearCart, actualizarCantidad, cantItems, cart, total}}>
            {children}
        </CartContext.Provider>
    )
}

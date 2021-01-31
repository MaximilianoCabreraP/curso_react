import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'

export const CartState = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cantItems, setCantItems] = useState(0)
    const [total, setTotal] = useState(0)
    const [idOrden, setIdOrden] = useState([])
    const [carritoEstado, setCarritoEstado] = useState(true);
    const [venta, setVenta] = useState({
        nroPedido: "",
        productos: [],
        fecha: "",
        total: ""
    });

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
        setTotal(cart.reduce((accumulator, currentValue) => accumulator + (currentValue.item.price * currentValue.cantidad), 0));
        setCantItems(cart.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0));
    }, [cart])

    return (
        <CartContext.Provider value={{addToCart, isInCart, idOrden, setIdOrden, carritoEstado, setCarritoEstado, removeItem, clearCart, actualizarCantidad, cantItems, cart, total, venta, setVenta}}>
            {children}
        </CartContext.Provider>
    )
}

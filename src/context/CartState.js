import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'

import { firestore } from "../firebaseConfig";

export const CartState = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [pedidos, setPedidos]= useState([]);
    const [cantItems, setCantItems] = useState(0);
    const [total, setTotal] = useState(0);
    const [idOrden, setIdOrden] = useState([]);
    const [carritoEstado, setCarritoEstado] = useState(true);
    const [venta, setVenta] = useState({
        nroPedido: "",
        productos: [],
        fecha: "",
        total: ""
    });

    useEffect(() => {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        setCart(carrito);
        let pedidos = JSON.parse(localStorage.getItem("pedidos"));
        setPedidos(pedidos);
        let ordenes = JSON.parse(localStorage.getItem("ordenes"));
        setIdOrden(ordenes);
    },[]);

    useEffect(() => {
        setTotal(cart.reduce((accumulator, currentValue) => accumulator + (currentValue.item.price * currentValue.cantidad), 0));
        setCantItems(cart.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0));
        localStorage.setItem("carrito", JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
    }, [pedidos])

    useEffect(() => {
        if(idOrden.length){
            const db = firestore;
            const getOrders = ( idOrden ) => {
                let orders = idOrden.map( (id) => {
                    return db.collection("orders").doc(id).get();
                })

                Promise.all(orders)
                .then(docs => {
                    let listadoPedidos = docs.map(doc => ({id: doc.id, ...doc.data()}));
                    setPedidos(listadoPedidos.reverse());
                })
                .catch(e => console.log(e))
            }
            getOrders( idOrden );
        }
        localStorage.setItem("ordenes", JSON.stringify(idOrden));
    }, [idOrden]);
    

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

    return (
        <CartContext.Provider value={{
            idOrden,  carritoEstado,  cantItems, cart, total, venta, pedidos, 
            addToCart, isInCart, setIdOrden, setCarritoEstado, removeItem, clearCart, actualizarCantidad, setVenta, setPedidos
        }}>
            {children}
        </CartContext.Provider>
    )
}

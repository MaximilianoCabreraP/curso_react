import React, { useContext } from 'react'

import CartContext from '../../context/CartContext'

const TotalCarrito = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    
    return (
        <>
            <div className="bloque-blanco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-sm-6 text-right align-self-center">
                            <h2>
                                Productos ({cart.length}) - <span>Total a Pagar: ${total}</span>
                            </h2>
                        </div>
                        <div className="col-7 col-sm-4 text-right align-self-center">
                            <button className="btn btn-primary btn-lg" onClick={() => console.log("Compra Finalizada")}>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => clearCart()} className="btn btn-danger btn-lg"> Vaciar Carrito</button>
        </>
    )
}

export default TotalCarrito

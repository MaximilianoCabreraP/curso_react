import React, { useContext } from 'react'

import ItemCarrito from './ItemCarrito'
import ResumenCompra from './ResumenCompra';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, carritoEstado } = useContext(CartContext);
    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <h1>CART</h1>
                    <p>Resumen de tu pedido.</p>
                </div>
                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        <div className="card card-body border-0">{
                            cart.length ?
                                (
                                    <>
                                        {
                                            cart.map((carrito => [
                                                <ItemCarrito key={carrito.item.id} item={carrito.item} cantidad={carrito.cantidad} />
                                            ]))
                                        }
                                    </>
                                )
                            :   (
                                <>
                                    <div className="p-3 text-center text-muted">Tu carrito está vacío</div>
                                    <Link to="/" className="btn btn-primary">Agregar productos</Link>
                                </>
                                )
                            }
                            {!carritoEstado?
                                <div className="alert alert-dismissible alert-danger">
                                    <p className="mb-3">Lo sentimos! Los productos en stock no alcanzan para finaliar la venta. </p>
                                    <a href="/#" className="alert-link">Recargar stock</a>
                                </div> : ""
                            }
                        </div>
                    </div>
                    {
                        cart.length?
                            <div className="col-sm-3 p-3">
                                <ResumenCompra />
                            </div> : ""
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Cart

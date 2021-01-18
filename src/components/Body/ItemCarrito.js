import React, { useContext } from 'react'

import CartContext from '../../context/CartContext'

const ItemCarrito = ({item, cantidad}) => {
    const { id, title, photo, stock } = item
    const { removeItem, actualizarCantidad } = useContext(CartContext);

    return (
        <div className="container" id ="resumen-cart-fijo">
            <div className="row bloque-blanco-cart">
                <div className="col-3 col-md-2">
                    <img className="img-cart" src={`${photo}`} alt={`$(title)`}/>
                </div>
                <div className="col-8 col-md-5 ">
                    <div>
                        {title}
                    </div>
                    <div className="row item-cantidad no-gutters">
                        <div className="col-2 col-md-1">
                            <button onClick={() => actualizarCantidad(id, cantidad-=1) } disabled={cantidad <= 1}>-</button>
                        </div>
                        <div className="col-4 col-sm-5 col-md-2">
                            <span>{cantidad}</span>
                        </div>
                        <div className="col-2 col-md-1 text-left item-restar">
                            <button onClick={() => actualizarCantidad(id, cantidad+=1) } disabled={ cantidad >= stock } >+</button>
                        </div>
                    </div>
                    <button onClick={() => removeItem(id)}>Eliminar</button>
                </div>
                <div className="col-md-2 precio-cart text-right">${item.price * cantidad}</div>
            </div>
        </div>
    )
}

export default ItemCarrito

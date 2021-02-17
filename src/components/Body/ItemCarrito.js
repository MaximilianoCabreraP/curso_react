import React, { useContext } from 'react'

import CartContext from '../../context/CartContext'


const ItemCarrito = ({item, cantidad}) => {
    const { id, title, imagen, stock } = item
    const { removeItem, actualizarCantidad } = useContext(CartContext);

    return (
            <>
                <div className="row no-gutters py-2">
                    <div className="col-sm-2 p-2">
                        <img alt={`${title}`} src={`${imagen}`} className="img-fluid d-block" />
                    </div>
                    <div className="col-sm-4 p-2">
                        <h6 className="mb-1">{title}</h6>
                        <p className="mb-1">Precio: ${item.price} </p>
                    </div>
                    <div className="col-sm-2 p-2 text-center ">
                        <p className="mb-0">Cantidad: {cantidad}</p>
                    </div>
                    <div className="col-sm-4 p-2 text-right">
                        <button onClick={() => actualizarCantidad(id, cantidad-=1) } disabled={cantidad <= 1} hidden={cantidad <= 1} className="btn btn-danger btn-sm mb-1">
                            <svg width="20px" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                        </button>
                        <button onClick={() => removeItem(id)} hidden={cantidad>1} className="btn btn-danger btn-sm mb-1">
                            <svg width="20px" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                        </button>
                        <button onClick={() => actualizarCantidad(id, cantidad+=1) } disabled={ cantidad >= stock }  className="btn btn-primary btn-sm mr-2 mb-1">
                            <svg width="20px" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </>
    )
}

export default ItemCarrito

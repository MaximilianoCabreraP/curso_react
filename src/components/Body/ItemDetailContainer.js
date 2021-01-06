import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({producto}) => {
    return (
        <div className="container">
            <h1>ItemDetailContainer</h1>
            {producto.length ? (
                producto.map((item) => (
                    item.id === 4?
                        <ItemDetail 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            photo={item.photo}
                            stock={item.stock}/>
                        :
                        ""
                ))
            ):(
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">Cargando productos de ItemDetailContainer...</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemDetailContainer

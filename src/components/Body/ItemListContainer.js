import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting, productos }) => {
    const { nombreCategoria } = useParams()
    
    const listadoProductos = nombreCategoria?
                                productos.filter((item) => item.nombreCategoria === nombreCategoria) :
                                productos.sort(() => Math.random() - 0.5)
    
    return (
        <>
            <h4> { greeting } </h4>
            <div className="container">
                <h1 className="title-category">{nombreCategoria}</h1>
                <div className="row product-grid">
                    {
                        listadoProductos.length?
                        (
                            listadoProductos.map((item) =>(
                                <ItemList key={item.id} item={item} />
                            ))
                        ):(
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center">Cargando productos...</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ItemListContainer
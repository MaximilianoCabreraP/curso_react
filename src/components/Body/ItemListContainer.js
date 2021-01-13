import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting, productos }) => {
    const [ items, setItems ] = useState([])
    const { nombreCategoria } = useParams()

    useEffect(() => {
        const listProducts = new Promise((resolver, rechazar) => {
            resolver(productos)
            rechazar("No se pudieron cargar los productos")
        })

        listProducts.then(resultado=>{
            nombreCategoria?
                        setItems(resultado.filter((item) => item.nombreCategoria === nombreCategoria)) :
                        setItems(resultado.sort(() => Math.random() - 0.5))
        }).catch((resultado) => {
            console.log({ resultado })
        });
    }, [productos, nombreCategoria]);
    
    return (
        <>
            <h4> { greeting } </h4>
            <div className="container">
                <h1 className="title-category">{nombreCategoria}</h1>
                <div className="row product-grid">
                    {
                        items.length?
                        (
                            items.map((item) =>(
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
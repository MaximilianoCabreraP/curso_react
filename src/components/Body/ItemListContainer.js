import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting, productos }) => {
    const { nombre_categoria } = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        const listProducts = new Promise((resolver, rechazar) => {
            setTimeout(() => {
                resolver(productos)
                rechazar("No se pudieron cargar los productos")
            }, 2000)
        })
        listProducts.then((resultado)=>{
            if(nombre_categoria){
                const productosCategoria = resultado.filter((items) => items.nombre_categoria === nombre_categoria)
                setItems(productosCategoria)
            }else{
                resultado.sort(() => Math.random() - 0.5)
                setItems(resultado)
            }
        }).catch((resultado) =>{
            console.log({ resultado });
        })
    }, [productos, nombre_categoria])

    return (
        <>
            <h4> { greeting } </h4>
            <div className="container">
                <h1 className="title-category">{nombre_categoria}</h1>
                <div className="row product-grid">
                    {
                        items.length?
                        (
                            items.map((item) =>(
                                <ItemList 
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    link={item.link}
                                    photo={item.photo}
                                    stock={item.stock}
                                />
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

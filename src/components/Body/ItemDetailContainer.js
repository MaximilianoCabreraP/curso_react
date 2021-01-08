import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({productos}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const listProducts = new Promise((resolver, rechazar) => {
            setTimeout(() => {
                resolver(productos)
                rechazar("No se pudieron cargar los productos")
            }, 2000)
        })

        listProducts.then((resultado)=>{
            setItems(resultado);
        }).catch((resultado) => {
            console.log({ resultado });
        });
    });

    return (
        <div className="container">
            <h1>ItemDetailContainer</h1>
            {items.length ? (
                items.map((item) => (
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

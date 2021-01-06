import React, { useState, useEffect } from "react"
import Item from "./Item"
import "../../styles/Product.css"

const ItemList = ({ productos }) => {
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
            <div className="row product-grid">
                {items.length ? (
                    items.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            link={item.link}
                            photo={item.photo}
                            stock={item.stock}
                        />
                    ))
                ) : (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">Cargando productos...</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemList
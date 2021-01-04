import React, { useState, useEffect } from "react"
import Item from "./Item"
import "../styles/Product.css"

const ItemList = () => {
    const [items, setItems] = useState([]);
    const products = [
        {
            id: 1,
            title: "Teclado Gamer 1",
            price: 1500,
            link: "#teclado1",
            photo: "https://http2.mlstatic.com/D_NQ_NP_774176-MLA32822543298_112019-O.jpg",
            stock: 5
        }, {
            id: 2,
            title: "Teclado Gamer 2",
            price: 2500,
            link: "#teclado2",
            photo: "https://http2.mlstatic.com/D_NQ_NP_774176-MLA32822543298_112019-O.jpg",
            stock: 6
        }, {
            id: 3,
            title: "Teclado Gamer 3",
            price: 3500,
            link: "#teclado3",
            photo: "https://http2.mlstatic.com/D_NQ_NP_774176-MLA32822543298_112019-O.jpg",
            stock: 7
        }, {
            id: 4,
            title: "Teclado Gamer 4",
            price: 4500,
            link: "#teclado4",
            photo: "https://http2.mlstatic.com/D_NQ_NP_774176-MLA32822543298_112019-O.jpg",
            stock: 8
        }, {
            id: 5,
            title: "Teclado Gamer 5",
            price: 5500,
            link: "#teclado5",
            photo: "https://http2.mlstatic.com/D_NQ_NP_774176-MLA32822543298_112019-O.jpg",
            stock: 9
        }
    ];

    useEffect(() => {
        const listProducts = new Promise((resolver, rechazar) => {
            setTimeout(() => {
                resolver(products)
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
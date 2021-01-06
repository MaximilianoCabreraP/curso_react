import React, { useState, useEffect } from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer'
import { Route, Router } from 'react-router-dom'
import Home from './Home.js'
import Computacion from './Computacion.js'
import Audio from './Audio.js'
import Fotografia from './Fotografia.js'
const productos = [
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


const Main = () => {
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
        let producto = items.filter(item => item.id === 4);
    return (
        <>
            <div className="main">
                <Route path="/" exact>
                    <Home />
                </Route>
                    <Route path="/computacion">
                        <Computacion />
                    </Route>
                    <Route path="/fotografia">
                        <Fotografia />
                    </Route>
                    <Route path="/audio">
                        <Audio />
                    </Route>

                <ItemListContainer greeting = "Listado de Productos" productos={items} />
                <hr />
                <hr />
                <hr />
                <ItemDetailContainer producto={producto}/>
            </div>
        </>
    )
}

export default Main
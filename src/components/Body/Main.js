import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer'

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
    return (
        <>
            <div className="main">
                <ItemListContainer greeting = "Listado de Productos" productos={productos} />
                <hr />
                <hr />
                <hr />
                <ItemDetailContainer productos={productos}/>
            </div>
        </>
    )
}

export default Main
import React from 'react'
//import ItemDetailContainer from './ItemDetailContainer';

import { Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NotFound from './NotFound';
const productos = [
    {
        id: 1,
        title: "Teclado gamer HyperX Alloy Core",
        price: 1500,
        link: "/item/1",
        photo: "https://http2.mlstatic.com/D_NQ_NP_774176-MLA32822543298_112019-O.jpg",
        stock: 5,
        nombre_categoria: "computacion"
    }, {
        id: 2,
        title: "TECLADO GAMER BRB G-10",
        price: 2500,
        link: "/item/2",
        photo: "https://pascalonline.com.ar/wp-content/uploads/2020/08/Teclado-Gamer-Brb-G-10.png",
        stock: 6,
        nombre_categoria: "computacion"
    }, {
        id: 3,
        title: "Teclado gamer Nibio Impact mecánico RGB configurable",
        price: 3500,
        link: "/item/3",
        photo: "https://cdn.needish.com/prod-boxfish/ea748fb9-23a7-4e93-b80e-017da6fbfdba-grpn/scale/900x600.jpg",
        stock: 7,
        nombre_categoria: "computacion"
    }, {
        id: 4,
        title: "MWC 18: Sony A7 III",
        price: 4500,
        link: "/item/4",
        photo: "https://as.com/betech/imagenes/2018/02/27/portada/1519755076_817147_1519762876_noticia_normal.jpg",
        stock: 8,
        nombre_categoria: "fotografia"
    }, {
        id: 5,
        title: "Canon 200D",
        price: 4500,
        link: "/item/4",
        photo: "https://m.media-amazon.com/images/I/51gbZ1ot-KL.jpg",
        stock: 8,
        nombre_categoria: "fotografia"
    }, {
        id: 6,
        title: "HyperX Cloud Flight S",
        price: 5500,
        link: "/item/5",
        photo: "https://media.kingston.com/hyperx/product/hx-product-headset-cloud-flight-s-2-zm-lg.jpg",
        stock: 9,
        nombre_categoria: "audio"
    }
];

const Main = () => {
    return (
        <>
            <div className="main">
                <Switch>
                    <Route path="/" exact>
                        <ItemListContainer greeting="Listado de Productos" productos={productos}/>
                    </Route>
                    <Route path="/categorias/:nombre_categoria" exact>
                        <ItemListContainer productos={productos} />
                    </Route>
                    <Route path="/item/:id" exact>
                        <ItemDetailContainer productos={productos} />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Main
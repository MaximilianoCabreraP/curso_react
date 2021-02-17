import React, { useState, useEffect, useContext } from 'react'

import UserContext from '../../context/UserContext'
import Loader from './Loader';
import ItemList from './ItemList';

import { firestore } from "../../firebaseConfig";

const Wishlist = () => {
    const { wishlist } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = firestore;
        const getProductos = ( wishlist ) => {
            let listadoWishlist = wishlist.map( (id) => {
                return db.collection("productos").doc(id).get();
            })

            Promise.all(listadoWishlist)
            .then(docs => {
                let listadoProductos = docs.map(doc => ({id: doc.id, ...doc.data()}));
                actualizarProductos(listadoProductos);
            })
        }
        getProductos( wishlist );
        setLoading(false);
    },[wishlist]);

    const actualizarProductos = (listadoProductos) => {
        setProductos(listadoProductos);
    }
    
    if(loading){
        return <Loader />
    }else{
        return (
            <div className="container">
                <div className="row product-grid">{
                    productos.length?
                    (
                        productos.map((item) =>(
                            <ItemList key={item.id} item={item} />
                        ))
                    ):(
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
}

export default Wishlist

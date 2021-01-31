import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import { firestore } from "../../firebaseConfig";

import prods from '../../Assets/Products';

const ItemListContainer = ({ greeting }) => {
    const [ items, setItems ] = useState([]);
    const { nombreCategoria } = useParams();

    useEffect(() => {
        let query;
        nombreCategoria?
            query = firestore.collection("productos").where("nombreCategoria","==", nombreCategoria).get() :
            query = firestore.collection("productos").get()

        query.then(({docs}) =>{
            setItems(docs.map( doc => ({id: doc.id, ...doc.data()})))
        }).catch((err)=>{
            nombreCategoria?
                setItems(prods.filter((item) => item.nombreCategoria === nombreCategoria)) :
                setItems(prods);
            console.log(`No se pudieron cargar los productos. Error: ${err}`);
        });
    }, [nombreCategoria])
    
    const titulo = nombreCategoria?nombreCategoria:greeting;
    return (
        <>
            <div className="container">
                <h1 className="title-category">{titulo}</h1>
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

export default ItemListContainer;
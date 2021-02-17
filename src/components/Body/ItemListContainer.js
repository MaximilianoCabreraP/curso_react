import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import { firestore } from "../../firebaseConfig";

const ItemListContainer = ({ greeting, categorias } ) => {
    const [ items, setItems ] = useState([]);
    const { nombreCategoria } = useParams();
    
    const realizarQuery = (query) =>{
        query.then(({docs}) => {
            setItems(docs.map( doc => ( {id: doc.id, ...doc.data()})))
        })
    }
    useEffect(() => {
        if(nombreCategoria === undefined){
            realizarQuery(firestore.collection("productos").get())
        }else{
            let buscar = {};
            categorias.forEach( value => {
                if(value.slug === nombreCategoria){
                    buscar = value;
                }
            })
            buscar !== null?
                realizarQuery(firestore.collection("productos").where("idCategoria", "==", parseInt(buscar.id)).get())
                : realizarQuery(firestore.collection("productos").get())
        }
    }, [nombreCategoria, categorias])
    
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
import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound';
import Loader from './Loader';

import { firestore } from "../../firebaseConfig"
import prods from '../../Assets/Products'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const query = firestore.collection("productos").doc(id).get()

        query.then((resultado) => {
            setProducto({id: resultado.id, ...resultado.data()})
        })
        .catch((e) => {
            let prod = prods.filter((item) => (item.id === parseInt(id)))
            setProducto(...prod);
            console.log(`No se pudieron cargar los productos. Error: ${e}`)
        }).finally(()=> {
            setLoading(false)
        })
    },[id])
    
    if(loading){
        return <Loader />
    }else if(producto === "no existe"){
        return <NotFound />
    }else{
        return (
            <div className="container">
                {
                    <ItemDetail item={producto} />
                }
            </div>
        )
    }
}

export default ItemDetailContainer

import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound';
import Loader from './Loader';

const ItemDetailContainer = ({productos}) => {
    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const listProducts = new Promise((resolver, rechazar) => {
            resolver(productos)
            rechazar("No se pudieron cargar los productos")
        })

        listProducts.then(resultado=>{
            let itemFiltrado = resultado.filter(i => i.id === parseInt(id))
            itemFiltrado.length === 0? setItem("no existe") : setItem(itemFiltrado)
        }).catch((resultado) => {
            console.log({ resultado })
        });
    }, [id, productos]);

    if(item.length){
        if(item !== "no existe"){
            return (
                <div className="container">
                    {
                        <ItemDetail item={ item[0] } />
                    }
                </div>
            )
        }else{
            return <NotFound />
        }
    }else{
        return <Loader />
    }
}

export default ItemDetailContainer

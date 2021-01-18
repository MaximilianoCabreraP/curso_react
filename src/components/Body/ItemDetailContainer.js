import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound';
import Loader from './Loader';

const ItemDetailContainer = ({productos}) => {
    const { id } = useParams()

    const productoFiltrado = productos.filter(i => i.id === parseInt(id))
    const item = productoFiltrado.length === 0? "no existe" : productoFiltrado;

    if(item.length > 0){
        if(item !== "no existe"){
            return (
                <div className="container">
                    {
                        <ItemDetail key={item[0].id} item={item[0]} />
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

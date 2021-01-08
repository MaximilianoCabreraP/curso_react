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
            setTimeout(() => {
                resolver(productos)
                rechazar("No se pudieron cargar los productos")
            }, 2000)
        })

        listProducts.then((resultado)=>{
            let itemFiltrado = resultado.filter(i => i.id === parseInt(id))
            itemFiltrado.length === 0? setItem("no existe") : setItem(itemFiltrado)
        }).catch((resultado) => {
            console.log({ resultado })
        });
    });

    if(item.length > 0){
        if(item !== "no existe"){
            return (
                <div className="container">
                    {
                        <ItemDetail 
                                    key={item[0].id}
                                    id={item[0].id}
                                    title={item[0].title}
                                    price={item[0].price}
                                    link={item[0].link}
                                    photo={item[0].photo}
                                    stock={item[0].stock} />
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

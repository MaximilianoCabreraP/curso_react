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
                        <ItemDetail key={item[0].id}
                                    id={item[0].id}
                                    title={item[0].title}
                                    price={item[0].price}
                                    photo={item[0].photo}
                                    stock={item[0].stock}
                                    nombreCategoria={item[0].nombreCategoria} />
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

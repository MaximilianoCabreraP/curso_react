import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NotFound from './NotFound';
import productos from  '../../Assets/Products.js'

const Main = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const listProducts = new Promise((resolver, rechazar) => {
            setTimeout(() => {
                resolver(productos)
                rechazar("No se pudieron cargar los productos")
            }, 2000)
        })
        listProducts.then((resultado)=>{
            setItems(resultado)
        }).catch((resultado) =>{
            console.log({ resultado });
        })
    }, [])
    return (
        <>
            <div className="main">
                <Switch>
                    <Route path="/" exact>
                        <ItemListContainer greeting="Listado de Productos" productos={items} />
                    </Route>
                    <Route path="/categorias/:nombreCategoria" exact>
                        <ItemListContainer productos={items} />
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
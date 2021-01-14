import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import ItemListContainer from './components/Body/ItemListContainer';
import Cart from './components/Body/Cart';
import NotFound from './components/Body/NotFound';
import productos from  './Assets/Products.js'
import  './styles/App.css';

const App = () => {
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
    return(
        <>
            <BrowserRouter>
                <Header />
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
                        <Route path="/cart" exact>
                            <Cart />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
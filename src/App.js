import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from "./components/Header/Header"
import Main from "./components/Body/Main"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import ItemListContainer from './components/Body/ItemListContainer';
import Cart from './components/Body/Cart';
import NotFound from './components/Body/NotFound';

import { CartState } from './context/CartState'

import productos from  './Assets/Products.js'
import  './styles/App.css';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <CartState>
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
                </CartState>
            </BrowserRouter>
        </>
    )
}

export default App
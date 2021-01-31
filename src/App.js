import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import ItemListContainer from './components/Body/ItemListContainer';
import Cart from './components/Body/Cart';
import NotFound from './components/Body/NotFound';

import { CartState } from './context/CartState'

import ResumenCompra from './components/Body/ResumenCompra';
import MisPedidos from './components/Body/MisPedidos';
import Wishlist from './components/Body/Wishlist';

import 'bootswatch/dist/lux/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <CartState>
                    <Header />
                    <div className="main">
                        <Switch>
                            <Route path="/" exact>
                                <ItemListContainer greeting="Listado de Productos" />
                            </Route>
                            <Route path="/categorias/:nombreCategoria" exact>
                                <ItemListContainer />
                            </Route>
                            <Route path="/item/:id" exact>
                                <ItemDetailContainer />
                            </Route>
                            <Route path="/cart" exact>
                                <Cart />
                            </Route>
                            <Route path="/resumen" exact>
                                <ResumenCompra />
                            </Route>
                            <Route path="/mis-pedidos" exact>
                                <MisPedidos />
                            </Route>
                            <Route path="/wishlist" exact>
                                <Wishlist />
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
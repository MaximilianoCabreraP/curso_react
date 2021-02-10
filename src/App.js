import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import ItemListContainer from './components/Body/ItemListContainer';
import Cart from './components/Body/Cart';
import NotFound from './components/Body/NotFound';

import ResumenCompra from './components/Body/ResumenCompra';
import MisPedidos from './components/Body/MisPedidos';
import Wishlist from './components/Body/Wishlist';
import Register from './components/User/Register';
import Login from './components/User/Login';

import { firestore } from "./firebaseConfig"

import { CartState } from './context/CartState'
import { UserState } from './context/UserState'

import 'bootswatch/dist/lux/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
    firestore.collection("categorias").get()
        .then( ({docs}) =>{
            setCategorias( docs.map( doc => ({id: doc.id, ...doc.data()})) );
        })
        .catch( (err) => {
            console.log("error: ",err);
        })
    }, []);

    return(
        <>
            <BrowserRouter>
                <UserState>
                    <CartState>
                        <Header categorias={categorias} />
                        <div className="main">
                            <Switch>
                                <Route path="/" exact>
                                    <ItemListContainer greeting="Listado de Productos" />
                                </Route>
                                <Route path="/categorias/:nombreCategoria" exact>
                                    <ItemListContainer categorias={categorias} />
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
                                <Route path="/register" exact>
                                    <Register />
                                </Route>
                                
                                <Route path="/login" exact>
                                    <Login />
                                </Route>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </div>
                        <Footer />
                    </CartState>
                </UserState>
            </BrowserRouter>
        </>
    )
}

export default App
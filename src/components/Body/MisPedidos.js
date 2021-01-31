import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'

import { firestore } from "../../firebaseConfig";

import { Link } from 'react-router-dom'

import '../../styles/App.css'
const MisPedidos = () => {
    const { idOrden } = useContext(CartContext);
    
    const [listaOrden, setListaOrden] = useState([])
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>{
        let cargando = true;
        const db = firestore;

        if(cargando){
            const getOrders = (idOrden, setListaOrden) => {
                let itemRefs = idOrden.map( (id) => {
                    return db.collection("orders").doc(id).get();
                })

                Promise.all(itemRefs)
                .then(docs => {
                    let items = docs.map(doc => ({id: doc.id, ...doc.data()}));
                    console.log("Items: ",items);
                    setListaOrden(items.reverse());
                })
                .catch(e => console.log(e))
                .finally(() => {
                    setLoading(false);
                })
            }
            getOrders( idOrden, setListaOrden );
            return () => {
                cargando = false;
            }
        }
    },[idOrden])

    let curDate = new Date(null);
    
    if(loading){
        return "Cargando...";
    }else{
        return (
            <div>
                {listaOrden.length ?
                    <div className="container">
                        {/* <h2>Lista de pedidos</h2>
                        <div className="container my-1 alert alert-dismissible alert-success">
                            La compra fue exitosa. Tu nro de pedido es: <h5>{idOrden}</h5>
                        </div> */}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">NroPedido</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaOrden.map(({id, date, items, total}) => (
                                    <tr>
                                        <th scope="row">{id}</th>
                                        <td>{items && items.map(({item}) => <p>{item.title}</p>)}</td>
                                        <td>{items &&
                                            items.map(({cantidad}) => <p>{cantidad}</p>)}</td>
                                        <td>{
                                            curDate.setTime(date.seconds*1000),
                                            curDate.toLocaleString()
                                            }</td>
                                        <td>{total}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div> 
                :
                    <>
                        <div className="p-3 text-center text-muted">No realizaste ningún pedido</div>
                        <Link to="/" className="btn btn-primary">Empezar a comprar</Link>
                    </>
                }
            </div>
        )
    }
}

export default MisPedidos

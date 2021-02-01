import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'

import { firestore } from "../../firebaseConfig";

import { Link } from 'react-router-dom'

import '../../styles/App.css'
const MisPedidos = () => {
    const { idOrden, setIdOrden } = useContext(CartContext);
    
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

    const vaciarPedidos = () => {
        setIdOrden([]);
        setListaOrden([]);
    }

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

                        <button onClick={vaciarPedidos} type="button" className="btn btn-primary mb-2 vaciar-pedidos">Vaciar Pedidos</button> 
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">NroPedido</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio Unitario</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaOrden.map(({id, date, items, total}, i) => (
                                    <tr className={i===0?"table-success":""}>
                                        <th scope="row"><p >{id}</p></th>
                                        <td className="text-truncate">{
                                            curDate.setTime(date.seconds*1000),
                                            curDate.toLocaleString()
                                            }</td>
                                        <td>{items && items.map(({cantidad, item}) => <p className="acomodo-linea text-truncate">{cantidad} x {item.title}</p>)}</td>
                                        <td>{items &&
                                            items.map(({item}) => <p className="acomodo-linea">${item.price}</p>)}</td>
                                        <td>${total}</td>
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

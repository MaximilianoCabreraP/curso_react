import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'



import { Link } from 'react-router-dom'

import '../../styles/App.css'
const MisPedidos = () => {
    const { setIdOrden, pedidos, setPedidos } = useContext(CartContext);
    
    //const [listaOrden, setListaOrden] = useState([])
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>{
        if(pedidos !== null){
            setTimeout(() => {
                setLoading(false);
            }, 600);
        }else{
            console.log("Pedidos === null");
        }
    })

    const vaciarPedidos = () => {
        setPedidos([]);
        setIdOrden([]);
    }

    let curDate = new Date(null);
    
    if(loading){
        return "Cargando...";
    }else{
        return (
            <div>
                {pedidos.length ?
                    <div className="container">
                        <h2>Lista de pedidos</h2>
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
                                {pedidos.map(({id, date, items, total}, i) => (
                                    <tr className={i===0?"table-success":""} key={i} >
                                        <th scope="row" key={id}><p >{id}</p></th>
                                        <td className="text-truncate"key={date}>
                                            {(
                                                curDate.setTime(date.seconds*1000),
                                                curDate.toLocaleString()
                                            )}
                                        </td>
                                        <td>{items && items.map(({cantidad, item}) => <p className="acomodo-linea text-truncate" key={cantidad}>{cantidad} x {item.title}</p>)}</td>
                                        <td>{items && items.map(({item}) => <p className="acomodo-linea" key={item.price}>${item.price}</p>)}</td>
                                        <td key={total}>${total}</td>
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

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Product.css'

const ItemCount = ({ id, stock, initial = 1, addToCart, price, inCart}) => {
	const [contador, setContador] = useState(initial);

	initial = stock === 0?"Sin Stock": initial
	
  	const restarCantidad = () => { setContador(contador - 1) }
	const sumarCantidad = () => { setContador(contador + 1) }

	return (
		<div className="item-count">
			<button onClick={() => { restarCantidad(); }} className={`btn-count col-3`} disabled={contador <= initial}>-</button>
			<span className="input-count col-6"> {contador === 0 ? initial : contador} </span>
			<button onClick={() => { sumarCantidad(); }} className={"btn-count col-3"} disabled={ contador >= stock } > + </button>
			{!inCart?
				(
					<button
						className="btn btn-outline-primary btn-sm"
						onClick={() => { addToCart({id:id, cantidad: contador, precio:price}); }} >
						Agregar a Carrito
					</button>
				):(
					<Link to="/cart" className="btn btn-outline-primary btn-sm">Terminar Compra</Link>
				)
			}
		</div>
	)
	
}

export default ItemCount;

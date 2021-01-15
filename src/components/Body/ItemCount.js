import React, { useState } from 'react'
import '../../styles/Product.css'

const ItemCount = ({ item, initial = 1, addToCart, inCart}) => {
	const { stock } = item
	const [contador, setContador] = useState(initial);

  	const restarCantidad = () => {
		contador > initial ? 
					setContador(contador - 1)
      				: console.log("Stock Mínimo");
  	}

	const sumarCantidad = () => {
		contador < stock ? 
					setContador(contador + 1) 
					: console.log("Stock Máximo");
  	};

  	const agregarCarrito = (id, contador) => {
    	console.log(`Agregar a Carrito Producto con ID: ${id} - Cantidad: ${contador} - Restantes: ${stock - contador}`)
  	}

	return (
		<div className="item-count">
			<button onClick={() => { restarCantidad(); }} className={`btn-count col-3`} disabled={contador <= initial}>-</button>
			<span className="input-count col-6"> {contador === 0 ? initial : contador} </span>
			<button onClick={() => { sumarCantidad(); }} className={"btn-count col-3"} disabled={ contador >= stock } > + </button>
			{!inCart?
				(
					<button
						className="btn btn-outline-primary btn-sm"
						onClick={() => { addToCart({item:item, cantidad: contador}); }} >
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

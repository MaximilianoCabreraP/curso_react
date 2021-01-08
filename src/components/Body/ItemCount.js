import React, { useState } from 'react'
import '../../styles/Product.css'

const ItemCount = ({ id, stock, initial = 1 }) => {
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
			<button
				onClick={() => { restarCantidad(); }}
				className={`btn-count btn-less${contador} col-3`} >
				-
			</button>
			<span className="input-count col-6">
				{contador === 0 ? initial : contador}
			</span>
			<button
				onClick={() => { sumarCantidad(); }}
				className={`btn-count  btn-more${contador===stock?"-max":""} col-3`} >
				+
			</button>
			<button
				className="btn btn-outline-primary btn-sm"
				onClick={() => { agregarCarrito(id, contador); }} >
				Agregar a Carrito
			</button>
		</div>
	)
}

export default ItemCount;

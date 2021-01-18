import React, { useState } from 'react'
import '../../styles/Product.css'

const ItemCount = ({ item, initial = 1, addToCart, existe}) => {
	const [contador, setContador] = useState(initial);
  	const restarCantidad = () => setContador(contador - 1)
	const sumarCantidad = () => setContador(contador + 1)

	return (
		<>
			<button onClick={() => { restarCantidad(); }} className={`btn-count col-3`} disabled={contador <= initial}>-</button>
			<span className="input-count col-6"> {contador === 0 ? initial : contador} </span>
			<button onClick={() => { sumarCantidad(); }} className={"btn-count col-3"} disabled={ contador >= item.stock } > + </button>
			<button
				className="btn btn-outline-primary btn-sm"
				onClick={() => { addToCart({item:item, cantidad: contador}); }} >
				Agregar a Carrito
			</button>
		</>
	)
}

export default ItemCount;

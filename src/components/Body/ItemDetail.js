import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

import "../../styles/Product.css"

const ItemDetail = ({ id, title, price, photo, stock, nombreCategoria }) => {
	const [ cart, setCart ] = useState([])
	const addToCart = (obj) => {
		const existe = cart.find(product => product.id === obj.id)
		if(existe){
			setCart(cart)
		}else{
			setCart([
				...cart,
				{
					id: obj.id,
					cantidad: obj.cantidad,
					precio: obj.precio
				}
			])
		}
	}
	const [ inCart, setInCart ] = useState(false)
	useEffect(() => {
		setInCart(cart.find(product => product.id === id))
	}, [cart, id])

    return (
		<div className="row no-gutters detail-content">
			<div className="col-sm-1">&nbsp;</div>
			<div className="photo-detail col-sm-5 align-self-center text-center">
				<img src={photo} alt={title} />
			</div>
			<div className="col-sm-1">&nbsp;</div>
			<div className="col-sm-4">
				<div className="separador">&nbsp;</div>
				<h1>{title} - {id}</h1>
				<span className="price-item align-self-center">${price}</span>{" "}
				<div className="text-center stock">({stock} disponibles)</div>
				<ItemCount addToCart={addToCart} inCart={inCart} id={id} stock={stock} price={price} />
				<Link to={`/categorias/${nombreCategoria}`}>Volver a {nombreCategoria}</Link>
			</div>
		</div>
    )
}

export default ItemDetail

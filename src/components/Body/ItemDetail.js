import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

import "../../styles/Product.css"

const ItemDetail = ({ id, title, price, photo, stock, categoria }) => {
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
				<ItemCount id={id} stock={stock} />
				<Link to={`/categorias/${categoria}`}>Volver a {categoria}</Link>
			</div>
		</div>
    )
}

export default ItemDetail

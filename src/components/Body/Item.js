import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Product.css"

const Item = ({ id, title, price, photo, stock }) => {
  	return (
		<div className="item-list col-sm-3">
			<Link to={`/item/${id}`}>
				<div className="img-list-container">
					<img src={photo} alt={title} />
				</div>
				<h3>{title.substr(0, 40)}</h3>
			</Link>
			<p>Descripción del producto {id}</p>
			<div className="text-center stock">({stock} disponibles)</div>
			<div className="col-12 price-item align-self-center">${price}</div>
		</div>
	)
}

export default Item

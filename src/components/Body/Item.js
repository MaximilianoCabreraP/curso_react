import React from 'react'
import "../../styles/Product.css"

const Item = ({ id, title, price, link, photo, stock }) => {
  	return (
    	<div className="item-list col-sm-4">
      		<a href={link}>
        		<img src={photo} alt={title} />
        		<h3>{title}</h3>
      		</a>
            <p>Descripción del producto {id}</p>
			<div className="text-center stock">({stock} disponibles)</div>
			<div className="col-12 price-item align-self-center">${price}</div>
    	</div>
	)
}

export default Item

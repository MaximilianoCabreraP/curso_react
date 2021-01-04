import React from 'react'
import ItemCount from './ItemCount'
import "../styles/Product.css"

const Item = ({ id, title, price, link, photo, stock }) => {
  	return (
    	<div className="item-list col-sm-4">
      		<a href={link}>
        		<img src={photo} alt={title} />
        		<h3>{title}</h3>
      		</a>
      		Stock: {stock}
      		<div className="row no-gutters">
        		<div className="col-12 price-item align-self-center">${price}</div>
      		</div>
      		<ItemCount id={id} stock={stock} />
    	</div>
	)
}

export default Item

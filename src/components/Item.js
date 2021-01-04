import React from 'react'
import ItemCount from './ItemCount'
import "../styles/Product.css"

const Item = ({id,title,price,link,photo}) => {
    return (
        <div className="item-list col-sm-4">
            <a href={link}><img src={photo} alt={title} />
            <h3>{title}</h3></a>
            <div className="row no-gutters">
                <div className="col-5 price-item align-self-center">${price}</div>
            </div>
            <ItemCount id={id}/>
        </div>
    )
}

export default Item

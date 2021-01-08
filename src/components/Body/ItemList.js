import React from "react"
import Item from "./Item"
import "../../styles/Product.css"

const ItemList = ({ id, title, price, link, photo, stock }) => {
    return (
            <Item
                key={id}
                id={id}
                title={title}
                price={price}
                link={link}
                photo={photo}
                stock={stock}
            />
    )
}

export default ItemList
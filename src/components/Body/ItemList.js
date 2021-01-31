import React from "react"
import Item from "./Item"
import "../../styles/Product.css"

const ItemList = ({ item }) => {
    
    return (
            <Item
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                photo={item.photo}
                stock={item.stock}
            />
    )
}

export default ItemList
import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h4> { greeting } </h4>
            <ItemList />
        </>
    )
}

export default ItemListContainer

import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting, productos}) => {
    return (
        <>
            <h4> { greeting } </h4>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer

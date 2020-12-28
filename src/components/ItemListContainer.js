import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h4> { greeting } </h4>
            <div className="">
                <div className="">
                    <ItemCount />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer

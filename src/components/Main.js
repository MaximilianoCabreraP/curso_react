import React from 'react'
import ItemListContainer from './ItemListContainer'

const Main = () => {
    return (
        <>
            <div className="main">
                <ItemListContainer greeting = "Listado de Productos" />
            </div>
        </>
    )
}

export default Main
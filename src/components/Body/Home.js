import React from 'react'
import ItemListContainer from './ItemListContainer'

const Home = ({productos, categorias}) => {
    console.log("HOME")
    return (
        <div>
            <ItemListContainer greeting = "Listado de Productos" productos={productos} categorias={categorias} />
        </div>
    )
}

export default Home

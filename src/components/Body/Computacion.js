import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'

const Computacion = ({productos}) => {
    const {id_cat} = useParams()
    return (
        <div>
            Computacion
            <ItemListContainer greeting = "Listado de Productos" productos={productos} id_cat={id_cat} />
        </div>
    )
}

export default Computacion

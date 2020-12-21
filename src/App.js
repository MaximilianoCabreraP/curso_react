import React from 'react'
import NavBar from './components/NavBar'

function App(){
    return(
        <>
            <header>
                <NavBar/>
            </header>
            <h2>Las Ofertas de la semana</h2>
            <footer>
                <p>&copy; Copyright 2020</p>
            </footer>
        </>
    )
}

export default App
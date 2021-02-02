import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NotFound.css'
const NotFound = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - Página no encontrada</h2>
                    </div>
                    <Link to="/">Volver al carrito</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound

import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

const Header = ( {categorias} ) => {
    return (
        <>
            <header className="container">
                <div className="row no-gutters">
                    <div className="col-2">
                        <Logo />
                    </div>
                    <div className="col-10">
                        <NavBar categorias={categorias}/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
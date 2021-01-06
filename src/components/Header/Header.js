import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
    return (
        <>
            <header className="container">
                <div className="row no-gutters">
                    <div className="col-2">
                        <Logo />
                    </div>
                    <div className="col-10">
                        <NavBar />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
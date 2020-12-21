import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <span class="navbar-brand">Bidcom</span>
            <div class="navbar-collapse collapse" id="responsive-navbar-nav">
                <div class="mr-auto navbar-nav">
                    <a href="#" class="nav-link">Computación</a>
                    <a href="#" class="nav-link">Fotografía y Video</a>
                    <a href="#" class="nav-link">Audio</a>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
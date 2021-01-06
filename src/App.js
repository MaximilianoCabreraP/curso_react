import React from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import  './styles/App.css';
import { BrowserRouter } from "react-router-dom"

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
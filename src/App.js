import React from 'react'
import Header from "./components/Header/Header"
import Main from "./components/Body/Main"
import Footer from "./components/Footer/Footer"
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
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"
import Main from "./components/Body/Main"
import Footer from "./components/Footer/Footer"
import  './styles/App.css';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
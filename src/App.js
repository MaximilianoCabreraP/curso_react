import React from 'react'
import Header from "./components/Header/Header"
import Main from "./components/Body/Main"
import Footer from "./components/Footer/Footer"
import  './styles/App.css';

const App = () => {
    return(
        <>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default App
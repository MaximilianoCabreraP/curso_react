import React from 'react'
import "../../styles/Loader.css"

const Loader = () => {
    return (
        <>
            <div className="separador"></div>
            <div className="separador"></div>
            <div className="separador"></div>
            <div className="separador"></div>
            <div className="progress container">
                <div className="progress-value"></div>
            </div>
        </>
    )
}

export default Loader
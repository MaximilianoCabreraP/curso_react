import React, { useState } from 'react'
import UserContext from './UserContext'



import firebase from "firebase"
import { useHistory } from 'react-router-dom';

export const UserState = ({ children }) => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: ""
    })
    const [logueado, setLogueado] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const history = useHistory();
    
    const registrarse = (email, password, nombre, apellido, telefono) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( () => {
                setUsuario({
                    nombre: nombre,
                    apellido: apellido,
                    telefono: telefono,
                    email: email
                })
                history.push("/login");
            })
            .catch( (error) => {
                mensajeErrorRegistro(error);
            });
    }
    const mensajeErrorRegistro = ( {code, message} ) => {        
        let error = {}
        switch (code) {
            case 'auth/email-already-in-use':
                error["mail"] = "El email ingresado ya está siendo usado por otra cuenta."
                break;
            case 'auth/weak-password':
                error["password"] = "El password debería ser de al menos 6 caracteres."
                break;
            default:
                error["general"] = message;
                break;
        }
        setErrorMessage(error);
    }
    const login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            setLogueado(true)
            history.push("/");
        })
        .catch( (error) => {
            mensajeErrorLogin(error);
        })
    }
    const mensajeErrorLogin = ( {code, message} ) => {
        let error = {}
        switch (code){
            case 'auth/user-not-found':
                error["email"] = "No tenemos ningún registro con este email."; break;
            case 'auth/wrong-password':
                error["password"] = "El password ingresado es incorrecto."; break;
            default:
                error["general"] = message;
        }
        setErrorMessage(error);
    }
    const logout = () => {
        firebase.auth().signOut()
        .then(() =>{
            setLogueado(false);
            history.push("/");
        })
    }
    return (
        <UserContext.Provider value={{ logueado, usuario, errorMessage,  registrarse, setErrorMessage, login, logout, setLogueado }}>
            {children}
        </UserContext.Provider>
    )
}

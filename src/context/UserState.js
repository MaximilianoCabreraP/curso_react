import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'


//DB
import { firestore } from "../firebaseConfig.js";
import firebase from "firebase"

import { useHistory } from 'react-router-dom';

export const UserState = ({ children }) => {
    const [usuario, setUsuario] = useState({})
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("usuario"));
        if(user !== null && user.nombre !== ""){
            setUsuario(user);
            setLogueado(true);
            let wishList = JSON.parse(localStorage.getItem("wishlist"));
            setWishlist(wishList);
        }else{
            setUsuario({
                id: "",
                nombre: "",
                apellido: "",
                telefono: "",
                email: ""
            })
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("usuario", JSON.stringify(usuario));
    },[usuario]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const handleUserData = (inputs) => {
        var objectsAreSame = true;
        let nuevoUsuario = usuario;
        for(var propertyName in usuario) {
            if(propertyName !== "id"){
                if(usuario[propertyName] !== inputs[propertyName]) {
                    nuevoUsuario[propertyName] = inputs[propertyName];
                    objectsAreSame = false;
                }
            }
        }
        if(!objectsAreSame){
            localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
            return true;
        }
        return false;
    }
    
    const [logueado, setLogueado] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const history = useHistory();
    
    const registrarse = (email, password, nombre, apellido, telefono) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( () => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                const newUser = ({
                    id: user.uid,
                    nombre: nombre,
                    apellido: apellido,
                    telefono: telefono,
                    email: email
                })
                const collection_users = firestore.collection("users");
                collection_users.add(newUser)
                .then(() => {
                    setUsuario(newUser);
                    history.push("/login");
                })
            })
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
        .then(({user})=>{
            firestore.collection("users").get()
            .then(({docs}) => {
                let users = docs.map( doc => ({id: doc.id, ...doc.data()}) );
                let dataUser = users.map((u) => (u.id === user.uid && u))
                let loguedUser = ({
                    id: dataUser[0].id,
                    nombre: dataUser[0].nombre,
                    apellido: dataUser[0].apellido,
                    telefono: dataUser[0].telefono,
                    email: dataUser[0].email
                })
                setUsuario(loguedUser)
                setLogueado(true)
                history.push("/");
            })
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
            setUsuario({
                id: "",
                nombre: "",
                apellido: "",
                telefono: "",
                email: ""
            });
            history.push("/");
        })
    }
    const updateUser = () => {
        const collection_users = firestore.collection("users");
        collection_users.get()
            .then(({docs}) => {
                let newUser = {};
                let uid = "";
                let users = docs.map( (doc) => ({uid: doc.id, ...doc.data()}) );
                users.map( (u) => ( u.id === usuario.id && ( 
                    uid=u.uid,
                    newUser = {
                        id: usuario.id,
                        nombre: usuario.nombre,
                        apellido: usuario.apellido,
                        telefono: usuario.telefono,
                        email: usuario.email
                    }
                )));
                
                collection_users.doc(uid).update(newUser)
            })
    }
    const setToWishList = (id) => {
        let existe = wishlist.find(w => w === id);
        if(!existe)
            setWishlist([...wishlist, id ]);
    }
    return (
        <UserContext.Provider value={{ 
                logueado, usuario, errorMessage, wishlist, 
                registrarse, handleUserData, setErrorMessage, login, logout, setLogueado, setToWishList, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

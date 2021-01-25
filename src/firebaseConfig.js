import firebase from "firebase/app";
import "firebase/firestore";

const miConfiguracion = {
    apiKey: "AIzaSyAVLD0XjY1GzH3XcWs3p7QGUyjVzDP5Yd0",
    authDomain: "curso-react-coderhouse.firebaseapp.com",
    databaseURL: "https://curso-react-coderhouse-default-rtdb.firebaseio.com",
    projectId: "curso-react-coderhouse",
    storageBucket: "curso-react-coderhouse.appspot.com",
    messagingSenderId: "138950654996",
    appId: "1:138950654996:web:4350394869293039563b01"
}

const app = firebase.initializeApp(miConfiguracion)

export const firestore = firebase.firestore(app)
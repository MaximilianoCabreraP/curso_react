import React, { useState, useContext, useRef } from 'react';

import CartContext from '../../context/CartContext';
import { firestore } from "../../firebaseConfig";
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const ResumenCompra = () => {
    const { cart, total, idOrden, setIdOrden, setCarritoEstado, clearCart, cantItems } = useContext(CartContext);
    const history = useHistory();
    
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        confirmarEmail: ""
    });
    const [msjError, setError] = useState({});

    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const telefonoRef = useRef(null);
    const emailRef = useRef(null);
    const confirmarEmailRef = useRef(null);

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(validate()){
            const batch = firestore.batch();
            const collection_orders = firestore.collection("orders");
            const collection_products = firestore.collection("productos");

            (async () => {
                let hayStock = true;
                for await (const {item, cantidad} of cart){
                    let stockFinal = 0;
                    
                    const producto = await collection_products.doc(item.id).get();
                    if(producto.data().stock >= cantidad){
                        stockFinal = producto.data().stock - cantidad;
                        batch.update(collection_products.doc(item.id),{stock:stockFinal});
                        continue;
                    }
                    hayStock = false;
                    break;
                }

                if(hayStock){
                    batch.commit()
                    .then(() => {
                        const {nombre, apellido, email, telefono} = inputs
                        const fullName = apellido + ", " + nombre;
                        const orden = {
                            buyer : {fullName, telefono, email},
                            items : cart,
                            date : firebase.firestore.Timestamp.fromDate(new Date()),
                            total 
                        }

                        collection_orders.add(orden)
                        .then(({ id }) => {
                            setIdOrden([...idOrden, id]);
                        }).catch((err) =>{
                            console.log("Error al guardar la orden. ",err);
                            //TODO: Enviar mensaje al usuario para que entienda lo que está pasando
                        }).finally(() => {
                            let input = {};
                            input["nombre"] = input["apellido"] = input["telefono"] = input["email"] = input["confirmarEmail"] = "";
                            setInputs(input);
                        });
                        setCarritoEstado(true);
                        clearCart();
                    })
                    .catch((err) => {
                        console.log("Error al commitear el batch. ", err);
                        //TODO: Enviar mensaje al usuario para que entienda lo que está pasando
                    }).finally(() => {
                        //TODO: Poner spiner de procesando pago.
                        history.push("/mis-pedidos")
                    });
                }else{
                    setCarritoEstado(false);
                }
            })();
        }
    }
    const validate = () => {
        return true;
        let input = inputs;
        let errors = {};
        let isValid = true;

        if (input["nombre"].length <= 2) {
            isValid = false;
            errors["nombre"] = !input["nombre"]? "Por favor ingresá un nombre." : "El nombre debe contener al menos 3 caracteres.";
        }
        if (input["apellido"].length <= 2) {
            isValid = false;
            errors["apellido"] = !input["apellido"]?"Por favor ingresá un apellido." : "El apellido debe contener al menos 3 caracteres.";
        }

        if (!input["telefono"]) {
            isValid = false;
            errors["telefono"] = "Por favor ingresá un nro de teléfono.";
        }
  
        if (typeof input["telefono"] !== "undefined") {  
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["telefono"])) {
                isValid = false;
                errors["telefono"] = "Por favor ingresá solo números.";
            }else if(input["telefono"].length !== 10){
                isValid = false;
                errors["telefono"] = "Por favor ingresá un nro de teléfono válido (10 dígitos).";
            }
        }

        if (typeof input["email"] !== "undefined") {
            pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Por favor ingresá un mail válido.";
            }
        }

        if (typeof input["confirmarEmail"] !== "undefined") {
            pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if( !input["confirmarEmail"]) {
                isValid = false;
                errors["confirmarEmail"] = "Por favor confirmá el mail."
            }else if(input["email"] !== input["confirmarEmail"]){
                isValid = false;
                errors["confirmarEmail"] = "Los emails no coinciden.";
            }else if (!pattern.test(input["confirmarEmail"])) {
                isValid = false;
                errors["confirmarEmail"] = "Por favor ingresá un mail válido.";
            }
        }

        setError(errors);

        return isValid;
    }

    const handleBlur = e => {
        switch (e.target.name) {
            case "nombre": setBlur(inputs.nombre,nombreRef);break;
            case "apellido": setBlur(inputs.apellido,apellidoRef);break;
            case "telefono": setBlur(inputs.telefono,telefonoRef);break;
            case "email": setBlur(inputs.email,emailRef); break;
            case "confirmarEmail": setBlur(inputs.confirmarEmail,confirmarEmailRef); break;
            default: break;
        }
        return;
    }
    const setBlur = (input, ref) => {
        input.trim() === ""?
            ref.current.style.border = "1px solid red"
            : ref.current.style.border = ""
        return;
    }
    
    return (
        <>
            <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{cantItems}</h4>
                <p className="mb-1">Total a Pagar</p>
                <h3 className="m-0 txt-right">${total}</h3>
                <hr className="my-4"></hr>
                <div className="">
                    <form onSubmit={handleSubmit}>
                        Nombre
                            <input className="mb-1" onChange={handleChange} ref={nombreRef} name="nombre" type="text" placeholder="Ej: Anakin" value={inputs.nombre} onBlur={handleBlur}/>
                            <p className="text-danger">{msjError.nombre}</p>
                        Apellido
                            <input className="mb-1" onChange={handleChange} ref={apellidoRef} name="apellido" type="text" placeholder="Ej: Skywalker" value={inputs.apellido} onBlur={handleBlur}/>
                            <div className="text-danger">{msjError.apellido}</div>
                        Teléfono
                            <input className="mb-1" onChange={handleChange} ref={telefonoRef} name="telefono" type="tel" placeholder="Ej: 47462211" value={inputs.telefono} onBlur={handleBlur}/>
                            <div className="text-danger">{msjError.telefono}</div>
                        Email<br />
                            <input className="mb-1" onChange={handleChange} ref={emailRef} name="email" type="text" placeholder="Ej: Soy@tupapa.com" value={inputs.email} onBlur={handleBlur}/>
                            <div className="text-danger">{msjError.email}</div>
                        Confirmar Mail
                            <input onChange={handleChange} ref={confirmarEmailRef} name="confirmarEmail" type="text" placeholder="Ej: Soy@tupapa.com" value={inputs.confirmarEmail} onBlur={handleBlur}/>
                            <div className="text-danger">{msjError.confirmarEmail}</div>
                        <hr/>
                        <div>
                            <button onClick={handleSubmit} className="btn btn-primary btn-sm">Checkout</button>
                            <div className="separador"></div>
                            <button onClick={() => clearCart()} className="btn btn-outlineprimary btn-sm btn-danger"> Vaciar Carrito</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default ResumenCompra

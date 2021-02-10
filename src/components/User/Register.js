import React, { useState, useEffect, useContext, useRef } from 'react'

//Contexts
import UserContext from '../../context/UserContext';

const Register = () => {
    const { registrarse, errorMessage, setErrorMessage } = useContext(UserContext)
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const telefonoRef = useRef(null);

    useEffect(() => {
        setErrorMessage({});
    }, [setErrorMessage])

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(validate()){
            registrarse(inputs.email, inputs.password, inputs.nombre, inputs.apellido, inputs.telefono);
        }
    }
    const validate = () => {
        let input = inputs;
        let errors = {};
        let isValid = true;
        let pattern;

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
            pattern = new RegExp(/^[0-9\b]+$/);
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
                errors["mail"] = "Por favor ingresá un mail válido (mail@host.com).";
                emailRef.current.style.border = "1px solid red"
            }else{
                emailRef.current.style.border = ""
            }
        }
        if (typeof input["password"] !== "undefined") {
            if( !input["password"]) {
                isValid = false;
                errors["password"] = "Por favor ingresá un password."
                passwordRef.current.style.border = "1px solid red"
            }else if( input["password"].length < 6 ){
                isValid = false;
                errors["password"] = "El password debe contener al menos 6 caracteres."
                passwordRef.current.style.border = "1px solid red"
            }else{
                passwordRef.current.style.border = ""
            }
        }
        if (typeof input["confirmPassword"] !== "undefined") {
            if( !input["confirmPassword"]) {
                isValid = false;
                errors["confirmPassword"] = "Por favor confirmá el Password."
                confirmPasswordRef.current.style.border = "1px solid red"
            }else if(input["password"] !== input["confirmPassword"]){
                isValid = false;
                errors["confirmPassword"] = "Los passwords no coinciden.";
                confirmPasswordRef.current.style.border = "1px solid red"
            }else{
                confirmPasswordRef.current.style.border = ""
            }
        }
        setErrorMessage(errors);
        return isValid;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="card col-12 col-lg-7 login-card mt-2 hv-center">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2"></div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group text-left">
                                    Nombre
                                    <input type="nombre" tabIndex="1" className="form-control mb-2" onChange={handleChange} ref={nombreRef} id="nombre" name="nombre" placeholder="Nombre"/>
                                    <div className="text-danger">{errorMessage.nombre}</div>
                                </div>
                                <div className="form-group text-left">
                                    Telefono
                                    <input type="telefono" tabIndex="3" className="form-control mb-2" onChange={handleChange} ref={telefonoRef} id="telefono" name="telefono" placeholder="Telefono"/>
                                    <div className="text-danger">{errorMessage.telefono}</div>
                                </div>
                                <div className="form-group text-left">
                                    Password
                                    <input type="password" tabIndex="5" className="form-control mb-2" onChange={handleChange} ref={passwordRef} id="password" name="password" placeholder="Password" />
                                    <div className="text-danger">{errorMessage.password}</div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group text-left">
                                    Apellido
                                    <input type="apellido" tabIndex="2" className="form-control mb-2" onChange={handleChange} ref={apellidoRef} id="apellido" name="apellido" placeholder="Apellido"/>
                                    <div className="text-danger">{errorMessage.apellido}</div>
                                </div>
                                <div className="form-group text-left">
                                    Email
                                    <input type="text" tabIndex="4" className="form-control mb-2" onChange={handleChange} ref={emailRef} id="email" name="email"placeholder="Email"/>
                                    <div className="text-danger">{errorMessage.mail}</div>
                                </div>
                                <div className="form-group text-left">
                                    Confirm Password
                                    <input type="password" tabIndex="6" className="form-control mb-2" onChange={handleChange} ref={confirmPasswordRef} id="confirmPassword" name="confirmPassword" placeholder="Confirmar Password" />
                                    <div className="text-danger">{errorMessage.confirmPassword}</div>
                                </div>
                            </div>
                        </div><hr />
                        
                        <button type="submit" tabIndex="7" className="btn btn-primary btn-sm mb-2" disabled={inputs.password === "" || inputs.confirmPassword === ""}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register

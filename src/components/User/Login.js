import React, { useState, useContext, useRef } from 'react'

//Context
import UserContext from '../../context/UserContext';


const Login = () => {
    const { login, errorMessage, setErrorMessage } = useContext(UserContext)

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(validate()){
            login(inputs.email, inputs.password);
        }
    }

    const validate = () => {
        let input = inputs;
        let errors = {};
        let isValid = true;
        let pattern;

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

        setErrorMessage(errors);
        return isValid;
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2"></div>
                            <div className="form-group text-left">
                                <label >Email</label>
                                <input type="email" className="form-control mb-2" onChange={handleChange} ref={emailRef} id="email" name="email" placeholder="Email" />
                                <div className="text-danger">{errorMessage.email}</div>
                            </div>
                            <div className="form-group text-left">
                                <label>Password</label>
                                <input type="password" className="form-control mb-2" onChange={handleChange} ref={passwordRef} id="password" name="password" placeholder="Password" />
                                <div className="text-danger">{errorMessage.password}</div>
                            </div><hr />
                            <button type="submit" className="btn btn-primary btn-sm mb-2">
                                Register
                            </button>
                            <div className="text-danger">{errorMessage.general}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

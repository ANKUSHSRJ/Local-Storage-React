import React, { useState, setState } from 'react';
import localStorage from 'local-storage';
import './style.css'
import { useNavigate } from "react-router-dom";
export default function LogIn() {

    const passw = JSON.parse(window.localStorage.getItem('password'));
    const eml = JSON.parse(window.localStorage.getItem('email'));
    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error , setError] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setError("")


        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }

    }



    const handleSubmit = () => {
        console.log(email, password)
        console.log()
        if(email===eml && password === passw)
        {
            alert("Login Success Fully")
            window.localStorage.setItem('authincared',true);
            navigate('/GetDetails')
        }else{
            setError("Invalid Credentials")
        }
    }

    return (
        <div className="form">
            <div className="form-body">

                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>

            </div>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn">Login</button>
            </div>
            {error!== ""?
            <p style={{color:"red"}}>{error}</p>:null}
        </div>
    )
}

import React, {useState,setState} from 'react';
import localStorage from 'local-storage';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './style.css'
 


var userData = {}
function SignupForm() {
    window.localStorage.clear()
 
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [Signup,setSignup] = useState(true);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        
    

        // setSignup(false)

    }

    const [items, setItems] = useState([]);

    let navigate = useNavigate();
    const handleSubmit  = () => {
 
        console.log(firstName,lastName,email,password,confirmPassword);
        window.localStorage.setItem('email', JSON.stringify(email));
        window.localStorage.setItem('password', JSON.stringify(password));

        // console.log('-----saved in local', JSON)
        const items = JSON.parse(window.localStorage.getItem('email'));
        const cool = JSON.parse(window.localStorage.getItem('password'));

        console.log('-----getting it formm local', items)
        console.log('-----getting it formm local', cool)
        
        navigate('/Login/')




    
    }

    return(
        
        Signup?(
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                    </div>
                </div>
                <div class="footer">
                    <button onClick={()=>handleSubmit()} type="submit" class="btn" > Register </button>
                </div>
            </div>
        ):(
            <div className="form">
                <div className="form-body">
                 
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                    </div>
                   
                </div>
                <div class="footer">
                    <button onClick={()=>handleSubmit()} type="submit" class="btn">Login</button>
                </div>
            </div>
        )
       
    )       
}

export default SignupForm
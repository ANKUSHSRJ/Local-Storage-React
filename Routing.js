import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "./LogIn";
import SignupForm from "./SignupForm";

const Routing = () => {
    return(
        <BrowserRouter>
         <Route path='/SignUp' component={SignupForm}/>
         <Route path='/Login' component={LogIn}/>


        </BrowserRouter>
    )
}


export default Routing
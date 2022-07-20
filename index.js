import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignupForm from './SignupForm';
import LogIn from './LogIn';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetDetails from './GetDetails'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>

         <Route path='/SignUp' element={<SignupForm/>}/>
         <Route path='/Login' element={<LogIn/>}/>
         <Route path='/GetDetails' element={<GetDetails/>}/>

    </Routes>

    </BrowserRouter>
);


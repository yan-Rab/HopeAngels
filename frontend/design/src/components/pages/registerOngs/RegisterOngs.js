import React from 'react';
import Title from './Title';
import Form from './Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterOngs = () => (
    
        <div className = "body-register">
            <Title />
            <Form />
            <ToastContainer className = "toast-container" />
        </div>
 
)
export default RegisterOngs;
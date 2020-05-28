import React from 'react';
import Title from './Title';
import Form from './Form';
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const CadastroUsers = () => (
    <div className = 'body-main'>
        <Title />
        <Form />
        <ToastContainer className = "toast-container" />
    </div>
)

export default CadastroUsers;
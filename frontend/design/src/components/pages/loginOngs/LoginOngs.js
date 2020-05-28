import React from 'react';

import './styles.css';
import AuthOngs from './AuthOngs';
import logoMarca from '../../../images/logomarca.png';
import { ToastContainer } from 'react-toastify';
const LoginOngs = () => (
    <div className = "body-login-ongs">
        <div className = 'container'>
            <img src = {logoMarca} style = {{maxWidth: "250px", maxHeight: "180px"}} alt = "Logomarca do site" />
            <AuthOngs />
            <ToastContainer className = "toast-container" />
        </div>
    </div>
)

export default LoginOngs;
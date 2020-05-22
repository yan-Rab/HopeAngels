import React, { Component } from 'react';

import './styles.css';
import AuthOngs from './AuthOngs';
import logoMarca from '../../../images/logomarca.png';
export default class LoginOngs extends Component {
    render(){
        return(
            <div className = "body-login-ongs">
                <div className = 'container'>
                    <img src = {logoMarca} style = {{width: "250px", height: "180px"}} alt = "Logomarca do site" />
                    <AuthOngs />
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class RegisterOngs extends Component {
    render(){
        return(
            <div>
                <div className = "body-register">
                <Title />
                <Form />
                <ToastContainer className = "toast-container" />
                </div>
            </div>
        )
    }
}
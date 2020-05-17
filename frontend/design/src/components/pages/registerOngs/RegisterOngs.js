import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
export default class RegisterOngs extends Component {
    render(){
        return(
            <div>
                <div className = "body-register">
                <Title />
                <Form />
                </div>
            </div>
        )
    }
}
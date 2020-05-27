import React from 'react';
import Title from './Title';
import Form from './Form';
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default class Main extends React.Component {
    render(){
        return(
          
            <div className = 'body-main'>
                <Title />
                <Form />
                <ToastContainer className = "toast-container" />
            </div>
            
        );
    }
}
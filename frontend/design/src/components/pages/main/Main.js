import React from 'react';

import Form from './form';
import Logo from './logo';
import Title from './title';
import "./styles.css";
export default class Main extends React.Component {
    render(){
        return(
            <div className = 'body-main'>
              
                <Logo />
                <Title />
                <Form />

            </div>
        );
    }
}
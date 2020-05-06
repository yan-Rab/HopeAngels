import React from 'react';
import Title from './title';
import Form from './form';
import "./styles.css";
export default class Main extends React.Component {
    render(){
        return(
          
            <div className = 'body-main'>
                <Title />
                <Form />
            </div>
            
        );
    }
}
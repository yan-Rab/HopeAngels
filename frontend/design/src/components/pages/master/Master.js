import React, { Component } from 'react';
import Logout from './Logout';
import Cases from './cases/Cases';
import "./styles.css";
export default class Master extends Component {

    render(){
        
        return(
            <div>
                <Logout />
                <div className = "body-Case">
                <Cases />
                </div>
                
            </div>
        )
    }
}
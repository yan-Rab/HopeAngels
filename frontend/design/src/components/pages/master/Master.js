import React, { Component } from 'react';
import Header from './Header';
import Cases from './cases/Cases';
import "./styles.css";
export default class Master extends Component {

    render(){
        
        return(
            <div>
                <Header />
                <div className = "body-Case">
                <Cases />
                </div>
                
            </div>
        )
    }
}
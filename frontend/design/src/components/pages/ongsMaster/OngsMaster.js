import React, { Component } from 'react';
import Header from './Header';
import Ongs from './ongs/Ongs';
import "./styles.css";
export default class OngsMaster extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className = "body-Ongs">
                <Ongs />
                </div>
            </div>
        )
    }
}
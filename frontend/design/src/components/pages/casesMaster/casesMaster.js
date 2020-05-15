import React, { Component } from 'react';
import Header from './Header';
import Cases from './cases/Cases';
import "./styles.css";
export default class casesMaster extends Component {

    render(){
        
        return(
            <div>
                <Header />
                <div className = "body-Case">
                <Cases idOng = {this.props.match.params} />
                </div>
                
            </div>
        )
    }
}
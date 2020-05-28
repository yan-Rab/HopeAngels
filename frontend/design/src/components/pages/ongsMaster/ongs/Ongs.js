import React, { Component } from 'react';
import OngsComponent from './OngsComponent';
import './styles.css';
export default class Ongs extends Component {
    

    constructor(props){
        super(props);
        
        this.state = {
            ongsInfors: [],
            
        };
        
    }
    
    componentDidUpdate(prevProps){
        if(this.props.ongs !== prevProps.ongs){
            this.setState({ongsInfors: this.props.ongs})
        }
    }

    render(){
        const {ongsInfors} = this.state;
        return(
            <div className = "Ongs">
               
                {ongsInfors.map(ongs => (
                    <OngsComponent data = {ongs} key = {ongs._id} />
                ))}
            
                
            </div>
        )
    }
}
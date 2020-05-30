import React, { Component } from "react";
import CaseComponent from './CaseComponent';

import './styles.css';
export default class Cases extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            casesInfors: [],
        }
    }
    

    componentDidUpdate(prevProps){
        if(this.props.search !== prevProps.search){
            this.setState({casesInfors: this.props.search});
        }
    }

    render(){
        const { casesInfors } = this.state;
        
        return(
            <div className = "Cases">
             
              {casesInfors.map(cases => (
                 <CaseComponent data = {cases} key = {cases._id}/>
              ))}
               
            </div>
            
        )
    }
}
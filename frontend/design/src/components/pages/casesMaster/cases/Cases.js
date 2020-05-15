import React, { Component } from "react";
import api from '../../../../services/api';
import CaseComponent from './CaseComponent';

import './styles.css';
export default class Cases extends Component {

    state = {
        casesInfors: [],
    }
    
     componentDidMount(){
       this.loadCases();
    }

    loadCases = async() => {
        const {id} = this.props.idOng;
        
        const response = await api.post(`/searchCasesById`, {ong: id});
        console.log(response.data.docs);
        this.setState({casesInfors: response.data.docs});

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
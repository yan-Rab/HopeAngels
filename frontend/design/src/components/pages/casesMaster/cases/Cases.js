import React, { Component } from "react";
import api from '../../../../services/api';
import CaseComponent from './CaseComponent';

import './styles.css';
export default class Cases extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            casesInfors: [],
        }
    }
    
     componentDidMount(){
       this.loadCases();
    }

    componentDidUpdate(prevProps){
        if(this.props.search !== prevProps.search){
            this.setState({casesInfors: this.props.search});
        }
    }

    loadCases = async() => {
        const {id} = this.props.idOng;
        const response = await api.post(`/searchCasesById`, {ong: id});
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
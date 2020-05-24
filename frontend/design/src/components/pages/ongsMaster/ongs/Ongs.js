import React, { Component } from 'react';
import api from '../../../../services/api';
import OngsComponent from './OngsComponent';
import './styles.css';
export default class Ongs extends Component {
    

    constructor(props){
        super(props);
        
        this.state = {
            ongsInfors: [],
        };
        
    }
    
    componentDidMount(){
        this.loadOngs();
    }

    componentDidUpdate(prevProps){
        if(this.props.ongs !== prevProps.ongs){
            this.setState({ongsInfors: this.props.ongs})
        }
    }

    loadOngs = async() => {
        const token = localStorage.getItem("authenticationUsers");
        console.log(token);
        const response = await api.get("/searchOngs", {token});
        const { docs } = response.data.ongs;
        this.setState({ongsInfors: docs});
        
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
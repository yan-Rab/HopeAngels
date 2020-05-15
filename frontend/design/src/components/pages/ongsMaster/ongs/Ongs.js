import React, { Component } from 'react';
import api from '../../../../services/api';
import OngsComponent from './OngsComponent';
import './styles.css';
export default class Ongs extends Component {
    state = {
        ongsInfors: [],
    }

    componentWillMount(){
        this.loadOngs();
    }

    loadOngs = async() => {
        const response = await api.get("/searchOngs");
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
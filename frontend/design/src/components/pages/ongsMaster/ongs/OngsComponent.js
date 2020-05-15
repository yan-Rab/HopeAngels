import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

export default class OngsComponent extends Component {
    render(){
        const {data} = this.props;
        
        return(
           
            <div className = "OngComponent">
                <p><strong>Ong </strong></p>
                <p>{data.title}</p>
                <p><strong>Descrição</strong></p>
                <p>{data.description}</p>
                <p><strong>E-mail </strong></p>
                <p>{data.email}</p>
                <p><strong>CNPJ</strong></p>
                <p>{data.cnpj}</p>
                <Link to = {`/router-app-cases/${data._id}`} className ="link-conhecer">Conhecer</Link>
            </div>
           
        )
    }
}
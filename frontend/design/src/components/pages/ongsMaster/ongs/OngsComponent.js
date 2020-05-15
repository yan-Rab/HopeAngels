import React, {Component} from 'react';
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
                <p>{data.category}</p>
                <p>{data.cnpj}</p>
                <button className = "style-button">Doar</button>
            </div>
           
        )
    }
}
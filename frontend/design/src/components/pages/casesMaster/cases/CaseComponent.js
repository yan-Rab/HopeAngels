import React, {Component} from 'react';


export default class CaseComponent extends Component {

    render(){

        const {data} = this.props;
        return(
            <div className = "CaseComponent" >
                <p><strong>Caso </strong></p>
                <p>{data.title}</p>
                <p><strong>Detalhes</strong></p>
                <p>{data.description}</p>
                <p><strong>Valor </strong></p>
                <p>R$ {data.value}</p>
                
                <button className = "style-button">Doar</button>
                
            </div>
        )
    }
}



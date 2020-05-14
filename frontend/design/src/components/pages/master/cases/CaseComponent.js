import React, {Component} from 'react';
import {FcEmptyTrash} from 'react-icons/fc'

export default class CaseComponent extends Component {



    render(){

        const {data} = this.props;
        const icon = {width:"28px", height:"28px"};

        return(
            <div className = "CaseComponent" >
                <p><strong>Caso </strong></p>
                <p>{data.title}</p>
                <p><strong>Detalhes</strong></p>
                <p>{data.description}</p>
                <p><strong>Valor </strong></p>
                <p>{data.value}</p>
                
                <button className = "style-button">Doar</button>
                
            </div>
        )
    }
}



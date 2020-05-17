import React, { Component } from 'react';

export default class Form extends Component {
    render(){
        return(
            <div className = "body-form-ongs">
                <input type = "text" placeholder = "Título da sua Ong" />
                <input type = "text" placeholder = "Faça uma breve descrição" />
                <input type = "email" placeholder = "E-mail" />
                <input type = "number" placeholder = "CNPJ" />
                <input type = "password" placeholder = "Senha" />
                <input type = "password" placeholder = "Confirme sua senha!" />
                <button className = "but-register">Registrar</button>
            </div>
        )
    }
}
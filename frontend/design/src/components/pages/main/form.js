import React from 'react';

export default class Form extends React.Component {

    state = {
        name: "",
        email: "",
        creatPassword: "",
        confirmPassword: "",
    }

    handleName = (event) => {
        this.setState({name: event.target.value});  
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        
    }

    

    render(){
        return (
            <div className = 'form'>
            <form onSubmit = {this.handleSubmit.bind(this)}>
            <input type = "text" placeholder = " Nome completo" onChange = {this.handleName.bind(this)}/>
            <input type = "text" placeholder = " E-mail"/>
            <input type = "password" placeholder = " Crie sua senha"></input>
            <input type = "password" placeholder = " Confirme sua senha"/>
            <button type = "submit">Cadastrar</button>
            </form>
            </div>
        )
    }
}
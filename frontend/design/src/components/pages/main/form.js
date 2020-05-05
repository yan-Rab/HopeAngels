import React from 'react';
import api from '../../../services/api';
export default class Form extends React.Component {

    state = {
        name: "",
        email: "",
        createPassword: "-",
        confirmPassword: "",
    }

    handleName = (event) => {
        this.setState({name: event.target.value});  
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value});
    }
    handleCreatePassword = (event) => {
        this.setState({createPassword: event.target.value});
    }

    handleConfirmPassword = (event) => {
        this.setState({confirmPassword: event.target.value});
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.confirmPassword);
        const response = await api.post('/createUsers', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.confirmPassword,
        });
    }

    

    render(){
        const {createPassword} = this.state;
        const {confirmPassword} = this.state;
        return (
            <div className = 'form'>
            <form onSubmit = {this.handleSubmit.bind(this)}>
            <input type = "text"  onChange = {this.handleName.bind(this)} placeholder = " Nome completo"/>
            <input type = "text"  onChange = {this.handleEmail.bind(this)} placeholder = " E-mail"/>
            <input type = "password" placeholder = " Crie sua senha" onChange = {this.handleCreatePassword.bind(this)} />
            <input type = "password" placeholder = " Confirme sua senha" onChange = {this.handleConfirmPassword.bind(this)}/>
            <button type = "submit" disabled = {createPassword !== confirmPassword || createPassword === "" && confirmPassword === ""} >Cadastrar</button>
            </form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

export default class AuthOngs extends Component{

    state = {
        email: "",
        password: "",
    }

    getEmail = (event) => (
        this.setState({email: event.target.value})
    )

    getPassword = (event) => (
        this.setState({password: event.target.value})
    )

    authOngs = async(event) => {
        event.preventDefault();
        const { email } = this.state;
        const { password } = this.state;
        const proprietor = localStorage.getItem('userId');
        try{
            const response = await api.post("/authenticationOngs", { email,password,proprietor });
            localStorage.setItem('tokenOng', response.data.token);
            localStorage.setItem('idOng', response.data.ongs._id);
            setTimeout(() => {
                window.location.reload();
            }, 1500);
            
        }catch(error){
            return error;
        }
        
    }

    render(){
        return(
                
                <form onSubmit = {this.authOngs}>
                    <input type = "email" onChange = {this.getEmail.bind(this)} placeholder = "E-mail" required autoFocus />
                    <input type = "password" onChange = {this.getPassword.bind(this)} placeholder = "Senha" required minLength = {4}/>
                    <button>Logar</button>
                    <p>Não cadastrou sua Ong? <Link to = "/registerOngs" >Cadastre aqui</Link></p>
                </form>
        )
    }
}
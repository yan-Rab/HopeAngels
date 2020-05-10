import React from 'react';
import api from '../../../services/api';
import { Link } from "react-router-dom";
import logoMarca from "../../../images/logomarca.png";
export default class Form extends React.Component {

    state = {
        name: "",
        email: "",
        createPassword: "-",
        confirmPassword: "",
        message: "teste",
    }

    getName = (event) => {
        this.setState({name: event.target.value});  
    }
    getEmail = (event) => {
        this.setState({email: event.target.value});
    }
    getCreatePassword = (event) => {
        this.setState({createPassword: event.target.value});
    }

    getConfirmPassword = (event) => {
        this.setState({confirmPassword: event.target.value});
    }

    insertInforsUsers = async(event) => {
        event.preventDefault();
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
            <div className = 'body-form'>
            
            <div style = {{margin: "20px 20px 20px 80px"}}>
            <form onSubmit = {this.insertInforsUsers.bind(this)}>
            <img src = {logoMarca}></img>
            <input type = "text"  onChange = {this.getName.bind(this)} placeholder = " Nome completo"/>
            <input type = "text"  onChange = {this.getEmail.bind(this)} placeholder = " E-mail"/>
            <input type = "password" placeholder = " Crie sua senha" onChange = {this.getCreatePassword.bind(this)} />
            <input type = "password" placeholder = " Confirme sua senha" onChange = {this.getConfirmPassword.bind(this)}/>
            
            <button type = "submit" disabled = {createPassword !== confirmPassword || createPassword === "" && confirmPassword === ""} >Cadastrar</button>
            
            <p style = {{marginTop:"15px",fontSize: "20px"}}>
                Já possui uma Conta? <Link to = "/LoginUsers">Entre</Link>
            </p>

            </form>
            </div>
            </div>
        )
    }
}
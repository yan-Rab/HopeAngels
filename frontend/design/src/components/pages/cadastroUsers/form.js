import React from 'react';
import api from '../../../services/api';
import { Link } from "react-router-dom";
import logoMarca from "../../../images/logomarca.png";
import { DebounceInput } from 'react-debounce-input';

export default class Form extends React.Component {

    state = {
        name: "",
        email: "",
        createPassword: "-",
        confirmPassword: "",
        
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
        try{
        const response =  await api.post('/createUsers', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.confirmPassword,
        });

            localStorage.setItem("authenticationUsers", response.data.token);
            localStorage.setItem("userId", response.data.users._id)
        
        }catch(error){

            return error
        }
    }

    disabledButton = () => {
        const { createPassword } = this.state;
        const { confirmPassword } = this.state;

            if(createPassword === confirmPassword && createPassword !== "" && confirmPassword !== ""){
                return false;
            }else{
                return true;
            }
    }
    
    render(){

        return (
            <div className = 'body-form'>
            
                
            
                    <form onSubmit = {this.insertInforsUsers.bind(this)}>
                        <img src = {logoMarca} style = {{maxWidth:"280px",maxHeight:"190px"}} alt = "logomarca do site" />
                    
                        <DebounceInput type = "text" debounceTimeout = {800} onChange = {this.getName.bind(this)} placeholder = "Nome completo" required/>
                        <DebounceInput type = "email" debounceTimeout = {800} onChange = {this.getEmail.bind(this)} placeholder = "E-mail" required autoFocus />
                        <DebounceInput type = "password" debounceTimeout = {800} placeholder = " Crie sua senha" onChange = {this.getCreatePassword.bind(this)} required minLength = {4}/>
                        <DebounceInput type = "password" debounceTimeout = {800} placeholder = " Confirme sua senha" onChange = {this.getConfirmPassword.bind(this)} required minLength = {4}/>
                        
                        <button type = "submit" disabled = {this.disabledButton()} >Cadastrar</button>
                        
                        <span style = {{fontSize: "20px"}}>
                            <p style = {{marginTop:"15px"}}>Já possui uma Conta? <Link to = "/LoginUsers">Entre</Link></p>
                        </span>
                       
                    </form>
                   
            </div>
        )
    }
}
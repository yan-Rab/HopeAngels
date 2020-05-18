import React, {Component} from 'react';
import logoMarca from '../../../images/logomarca.png';
import './styles.css';
import { Link } from 'react-router-dom'; 
import api from '../../../services/api';

export default class Login extends Component {

    state = {
        email: "",
        password: "",
        message: "",
    }

    getEmail = (event) => (
        this.setState({email: event.target.value})
    )

    getPassword = (event) => (
        this.setState({password: event.target.value})
    )

    authUsers = async(event) => {
        event.preventDefault();
        const { email } = this.state;
        const { password } = this.state;
        try{
        
        const response = await api.post(`/authenticationUsers`, { email: email, password: password });
        const { _id } = response.data.users;
        const { token } = response.data;
    
        localStorage.setItem("authenticationUsers", token);
        localStorage.setItem("userId", _id);
        window.location.reload();
        
        }catch(error){
            this.setState({message: "Usuário ou senha incorretos!"})
        }
        
    }

    render(){
        return(
            <div className = "body-login">
                <div className = "logo-form">
                <img src = {logoMarca} style = {{width:"280px",height:"190px"}} alt = "logomarca do site"/>

                <form className = "form-login" onSubmit = {this.authUsers.bind(this)}>
                    <input type = "email" onChange = {this.getEmail.bind(this)} placeholder = "E-mail" required autoFocus />
                    <input type = "password"  onChange = {this.getPassword.bind(this)} placeholder = "Senha" required/>
                    <button type = 'submit' className = "link-entrar">Entrar</button>

                    <p style ={{marginTop: "15px", fontSize:"18px",marginBottom: "30px"}}>
                    Novo no Anjos da Esperança? 
                    <Link to = "/CadastroUsers" className = "link-cadastrar">Cadastre-se</Link>
                    </p>
                    <p>{this.state.message}</p>
                </form>
                
                </div>
            </div>
        )
    }
}
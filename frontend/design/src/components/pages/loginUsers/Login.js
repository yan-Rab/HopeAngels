import React, {Component} from 'react';
import logoMarca from '../../../images/logomarca.png';
import './styles.css';
import { Link } from 'react-router-dom'; 
import api from '../../../services/api';
export default class Login extends Component {

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

    verifyUsers = async() => {
        const { email } = this.state;
        const { password } = this.state;
        const response = await api.get(`/verifyUsers/${email}/${password}`);
        
 
    }

    render(){
        return(
            <div className = "body-login">
                <div className = "logo-form">
                <img src = {logoMarca}></img>

                <div className = "form-login">
                    <input type = "text" onChange = {this.getEmail.bind(this)} placeholder = "E-mail" />
                    <input type = "password"  onChange = {this.getPassword.bind(this)} placeholder = "Senha"/>
                    <Link to = "/AnjosDaEsperança" onClick = {this.verifyUsers.bind(this)} className = "link-entrar">Entrar</Link>

                    <p style ={{marginTop: "15px", fontSize:"18px",marginBottom: "30px"}}>
                    Novo no Anjos da Esperança? 
                    <Link to = "/CadastroUsers" className = "link-cadastrar">Cadastre-se</Link>
                    </p>

                </div>
                
                </div>
            </div>
        )
    }
}
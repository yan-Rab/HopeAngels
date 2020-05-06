import React, {Component} from 'react';
import logoMarca from '../../../images/logomarca.png';
import './styles.css';
export default class Login extends Component {
    render(){
        return(
            <div className = "body-login">
                <div className = "logo-form">
                <img src = {logoMarca}></img>

                <div className = "form-login">
                    <input type = "text" placeholder = "E-mail" />
                    <input type = "password"  placeholder = "Senha"/>
                    <a href = "" className = "link-entrar">Entrar</a>
                   
                    <p style ={{marginTop: "15px", fontSize:"18px",marginBottom: "30px"}}>
                    Novo no Anjos da Esperança? 
                    <a href = "" className = "link-cadastrar">Cadastre-se</a>
                    </p>

                </div>
                
                </div>
            </div>
        )
    }
}
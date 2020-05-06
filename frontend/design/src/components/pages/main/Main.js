import React, {Component} from 'react';
import logoMarca from '../../../images/logomarca.png';
import "./styles.css";
export default class Main extends Component {
    render(){
        return(
            <div className = 'main-header'>
                <img src = {logoMarca} style = {{marginTop: "10px"}}></img>
                <div className = 'cadastro-entry'>
                    <a href = "" className = "link-cadastro">Cadastre-se agora</a>
                    <a href = "" className = "link-entry">Entrar</a>
                </div>
            </div>
        )
    }
}
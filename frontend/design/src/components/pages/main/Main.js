import React, {Component} from 'react';
import logoMarca from '../../../images/logomarca.png';
import Infors from './Infors';
import "./styles.css";
import { Link } from 'react-router-dom';
export default class Main extends Component {
    render(){
        return(
            <div>
                <div className = 'main-header'>
                    <img src = {logoMarca} style = {{marginTop: "10px"}}></img>
                    <div className = 'cadastro-entry'>
                        <Link to = "/CadastroUsers" className = "link-cadastro">Cadastre-se agora</Link>
                        <Link to = "/LoginUsers" className = "link-entry">Entrar</Link>
                    </div>
                </div>
                <Infors />
            </div>
        )
    }
}
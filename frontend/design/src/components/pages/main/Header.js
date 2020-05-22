import React from 'react';
import logoMarca from '../../../images/logomarca.png';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className = 'main-header'>
        <img src = {logoMarca} style = {{marginTop: "20px",marginBottom:"20px",marginLeft: "10%",width:"260px",height:"160px"}} alt = "logomarca do site"/>
        <div className = 'cadastro-entry'>
        <Link to = "/CadastroUsers" className = "link-cadastro">Cadastre-se agora</Link>
        <Link to = "/LoginUsers" className = "link-entry">Entrar</Link>
        </div>
    </div>
)

export default Header;
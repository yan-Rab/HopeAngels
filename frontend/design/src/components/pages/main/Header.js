import React from 'react';
import logoMarca from '../../../images/logomarca.png';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className = 'main-header'>
        <img src = {logoMarca} style = {{marginTop: "40px",marginBottom:"20px",marginLeft: "10%",width:"200px",height:"130px"}}></img>
        <div className = 'cadastro-entry'>
        <Link to = "/CadastroUsers" className = "link-cadastro">Cadastre-se agora</Link>
        <Link to = "/LoginUsers" className = "link-entry">Entrar</Link>
        </div>
    </header>
)

export default Header;
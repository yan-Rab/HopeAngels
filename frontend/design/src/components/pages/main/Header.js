import React from 'react';
import logoMarca from '../../../images/logomarca.png';
import { Link } from 'react-router-dom';
const Header = () => (
    <header className = 'main-header'>
        <img src = {logoMarca} style = {{marginTop: "10px"}}></img>
        <div className = 'cadastro-entry'>
        <Link to = "/CadastroUsers" className = "link-cadastro">Cadastre-se agora</Link>
        <Link to = "/LoginUsers" className = "link-entry">Entrar</Link>
        </div>
    </header>
)

export default Header;
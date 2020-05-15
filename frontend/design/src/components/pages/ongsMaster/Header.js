import React from 'react';
import logoMarca from '../../../images/logomarca.png';
import Logout from '../casesMaster/Logout';
import { Link } from 'react-router-dom';
import './styles.css';
const Header = () => (
    <header>
        <img src = {logoMarca} style = {{marginLeft:"20%"}} />
        <div className = "componentButtons">
        <Link to = "" className = "butcadOng">Cadastre sua Ong</Link>
        <Logout />
        </div>

    </header>
)

export default Header;
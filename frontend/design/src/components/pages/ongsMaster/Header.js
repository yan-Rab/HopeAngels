import React from 'react';
import logoMarca from '../../../images/logomarca.png';
import Logout from '../casesMaster/Logout';
import './styles.css';
const Header = () => (
    <header>
        <img src = {logoMarca} style = {{marginLeft:"20%"}} />
        <div className = "componentButtons">
        <button className = "butcadOng">Cadastre sua Ong</button>
        <Logout />
        </div>
    </header>
)

export default Header;
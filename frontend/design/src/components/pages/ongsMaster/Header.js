import React from 'react';
import logoMarca from '../../../images/logomarca.png';
import Logout from '../../Logout';
import { Link } from 'react-router-dom';
import './styles.css';
const Header = () => (
    <div className = "header-ongs">
        <img src = {logoMarca} style = {{marginLeft:"20%",width:"220px",height:"140px"}} alt = "logomarca do site"/>

        <div className = "componentButtons">
        <Link to = "/LoginOngs" className = "butcadOng">Minha Ong</Link>
        <Logout />
        </div>

    </div>
)

export default Header;
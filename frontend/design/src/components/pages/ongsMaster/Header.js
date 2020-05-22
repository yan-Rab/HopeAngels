import React from 'react';
import logoMarca from '../../../images/logomarca.png';
import Logout from '../../Logout';
import { Link } from 'react-router-dom';
import ongSimbol from '../../../images/ngo.png';
import { DebounceInput} from 'react-debounce-input';
import './styles.css';
const Header = () => (
    <div className = "header-ongs">
        
        <img src = {logoMarca} style = {{marginLeft:"5%",width:"220px",height:"140px"}} alt = "logomarca do site"/>
        
        <div className = "search-ongs">
            <img src = {ongSimbol} style = {{width: "70px", height: "70px"}} />
            <DebounceInput type = "text" debounceTimeout = {800} placeholder = "Pesquise por Ongs" />
        </div>

        <div className = "componentButtons">
            <Link to = "/LoginOngs" className = "butcadOng">Minha Ong</Link>
            <Logout />
        </div>

    </div>
)

export default Header;
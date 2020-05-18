import React, {Component} from 'react';
import Logout from './Logout';
import logoMarca from '../../../images/logomarca.png';
import './styles.css';
export default class Header extends Component {
    render(){
        return(
            <header className = "header-Cases">
                <img src = {logoMarca} style = {{width:"220px",height:"140px"}} alt = "logomarca do site" />
                <Logout />
            </header>
        )
    }
}
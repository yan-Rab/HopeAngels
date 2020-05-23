import React, {Component} from 'react';
import Logout from '../../Logout';
import logoMarca from '../../../images/logomarca.png';
import { DebounceInput } from 'react-debounce-input';
import cases from '../../../images/cases.png';
import './styles.css';
export default class Header extends Component {
    render(){
        return(
            <header className = "header-Cases">
                <img src = {logoMarca} style = {{width:"220px",height:"140px"}} alt = "logomarca do site" />
                <div className = "search-cases">
                    <img src = {cases} style = {{width: "80px", height: "80px"}} title = "Casos" />
                    <DebounceInput type = "text" debounceTimeout = {800} placeholder = "Pesquise por casos" />
                </div>
                <Logout />
            </header>
        )
    }
}
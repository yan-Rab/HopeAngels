import React, {Component} from 'react';
import Logout from './Logout';
import logoMarca from '../../../images/logomarca.png';
import './styles.css';
export default class Header extends Component {
    render(){
        return(
            <header>
                <img src = {logoMarca} />
                <Logout />
            </header>
        )
    }
}
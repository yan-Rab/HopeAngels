import React, { Component } from 'react';
import Ongs from './ongs/Ongs';
import logoMarca from '../../../images/logomarca.png';
import Logout from '../../Logout';
import { Link } from 'react-router-dom';
import { DebounceInput} from 'react-debounce-input';
import api from '../../../services/api';
import search from '../../../images/search.png';
import "./styles.css";

export default class OngsMaster extends Component {

    state = {
        searchOngs: "",
        ongs: [],
    }

    getSearch = (event) => (
        this.setState({searchOngs: event.target.value})
    )

    searchOngs = async() => {
        const { searchOngs } = this.state;
        const response = await api.post('/searchOng', {value: searchOngs});
        
        this.setState({ongs: response.data.ongs});
    }

    render(){
        return(
            <div>
                 <div className = "header-ongs">
        
                    <img src = {logoMarca} style = {{marginLeft:"5%",width:"220px",height:"140px"}} alt = "logomarca do site"/>
                
                    <div className = "search-ongs">
                        
                        <DebounceInput type = "text" debounceTimeout = {800} onChange = {this.getSearch.bind(this)} placeholder = "Pesquise por Ongs" />
                        <button className = "but-search" style = {{background: "none"}} onClick = {this.searchOngs.bind(this)}>
                            <img src = {search} title = "Buscar" style = {{marginLeft: "15px",width: "60px", height: "60px"}} />
                        </button>
                    </div>

                    <div className = "componentButtons">
                        <Link to = "/LoginOngs" className = "butcadOng">Minha Ong</Link>
                        <Logout />
                    </div>

                </div>

                <div className = "body-Ongs">
                <Ongs ongs = {this.state.ongs} />
                </div>
            </div>
        )
    }
}
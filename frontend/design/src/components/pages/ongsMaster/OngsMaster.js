import React, { Component } from 'react';
import Ongs from './ongs/Ongs';
import Logout from '../../Logout';
import { Link } from 'react-router-dom';
import { DebounceInput} from 'react-debounce-input';
import api from '../../../services/api';

import logoMarca from '../../../images/logomarca.png';
import search from '../../../images/search.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";

export default class OngsMaster extends Component {

    state = {
        searchOngs: "",
        ongs: [],
        ongsInfo: {},
        page: 1,
        
    }

    getSearch = (event) => (
        this.setState({searchOngs: event.target.value})
    )

    componentDidMount(){
        this.loadOngs();
    }

    loadOngs = async(page = 1) => {
        const token = localStorage.getItem("authenticationUsers");
        try{
            const response = await api.get(`/searchOngs?page=${page}`, {token});
            const { docs, ...ongsInfo } = response.data.ongs;
            
            this.setState({ongs: docs, ongsInfo, page});
        }catch(error){
            return error;
        }
    }

    searchOngs = async() => {
        const { searchOngs } = this.state;
        try{
            const response = await api.post('/searchOng', {value: searchOngs});
            return this.setState({ongs: response.data.ongs});
        
        }catch(error){
            return error
        }  
    }

    prevPage = () => {
        const { page } = this.state;
        if(page === 1){
            return
        }else{
            const pageNumber = page - 1;
            this.loadOngs(pageNumber);
        }

    }

    nextPage = () => {
       const { page , ongsInfo } = this.state;
       if(page === ongsInfo.pages){
           return
       }else{
           const pageNumber = page + 1;
           this.loadOngs(pageNumber);
       }
    }

    disabledPrevButton = () => {
        const { page } = this.state;
        if(page === 1) {
            return true
        }else{
            return false
        }
    }

    disabledNextButton = () => {
       const { page, ongsInfo } = this.state;
       if(page === ongsInfo.pages){
           return true
       }else{
           return false
       }
    }

    render(){
        return(
            <div className = "container-main">
                 <div className = "header-ongs">
        
                    <img src = {logoMarca} style = {{maxWidth:"220px",maxHeight:"140px"}} alt = "logomarca do site"/>
                
                    <div className = "search-ongs">
                        
                        <DebounceInput type = "text" debounceTimeout = {800} onChange = {this.getSearch.bind(this)} placeholder = "Pesquise por Ongs" />
                        <button className = "but-search" style = {{background: "none"}} onClick = {this.searchOngs.bind(this)}>
                            <img src = {search} title = "Buscar" style = {{marginLeft: "15px",width: "50px", height: "50px"}} alt = "Botão de busca" />
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
                
                <div className = "buttons-paginate">
                    <button className = "but-paginate" onClick = {this.prevPage.bind(this)} disabled = {this.disabledPrevButton()}>Anterior</button>
                    <button className = "but-paginate" onClick = {this.nextPage.bind(this)} disabled = {this.disabledNextButton()}>Próximo</button>
                </div>
                <ToastContainer className = "toast-container" />
            </div>
        )
    }
}
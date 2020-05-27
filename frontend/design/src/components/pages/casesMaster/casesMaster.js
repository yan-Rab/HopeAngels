import React, { Component } from 'react';
import Logout from '../../Logout';
import logoMarca from '../../../images/logomarca.png';
import { DebounceInput } from 'react-debounce-input';
import Cases from './cases/Cases';
import api from '../../../services/api';
import search from '../../../images/search.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";
export default class casesMaster extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchCase: "",
            cases: [],
        }
    }

    getSearchCases = (event) => (
        this.setState({searchCase: event.target.value})
    )

    loadCases = async() => {
        const { searchCase } = this.state;
        try{

        const response = await api.post("/searchCasesEspecify", {value: searchCase});
        this.setState({cases: response.data.cases});

        }catch(error){
            return error
        }
    }

    render(){
        
        return(
            <div>
                 <header className = "header-Cases">
                    <img src = {logoMarca} style = {{maxWidth:"220px",maxHeight:"140px"}} alt = "logomarca do site" />
                    <div className = "search-cases">
                        <DebounceInput type = "text" onChange = {this.getSearchCases.bind(this)} debounceTimeout = {800} placeholder = "Pesquise por casos" />
                        <button className = "but-search-cases" onClick = {this.loadCases.bind(this)}>
                            <img src = {search} alt = "Botão de Busca" style = {{width: "50px", height: "50px"}} />
                        </button>
                    </div>
                    <Logout />
                </header>

                <div className = "body-Case">
                <Cases idOng = {this.props.match.params} search = {this.state.cases} />
                </div>
                <ToastContainer className = 'toast-container'/>
            </div>
        )
    }
}
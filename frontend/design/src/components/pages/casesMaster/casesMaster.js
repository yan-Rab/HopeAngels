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
            casesInfo: {},
            page: 1,
        }
    }

    getSearchCases = (event) => (
        this.setState({searchCase: event.target.value})
    )

    componentDidMount(){
        this.loadCases();
    }
    
    loadCases = async(page = 1) => {
        const {id} = this.props.match.params;
        try{
            const response = await api.post(`/searchCasesById?page=${page}`, {ong: id});
            const {docs, ...casesInfo } = response.data;
            this.setState({cases: docs, casesInfo, page});
        }catch(error){
            return error;
        }
    }

    prevPage = () => {
        const { page } = this.state;
        if(page === 1){ 
            return 
        }else{
            const pageNumber = page - 1;
            return this.loadCases(pageNumber)
        }
    }

    nextPage = () => {
        const { page, casesInfo } = this.state;
        if(page === casesInfo.pages){
            return
        }else{
            const pageNumber = page + 1;
            return this.loadCases(pageNumber)
        }
    }

    disableButtonPrevPage = () => {
        const { page } = this.state;
        if(page === 1) {
            return true
        }else{
            return false
        }
    }

    disableButtonNextPage = () => {
        const { page, casesInfo } = this.state;
        if(page === casesInfo.pages){
            return true
        }else{
            return false
        }
    }

    loadCasesBySearch = async() => {
        const { searchCase } = this.state;
        const { id } = this.props.match.params;
        try{

        const response = await api.post("/searchCasesSpecific", {value: searchCase, idOng: id});
        this.setState({cases: response.data.cases});

        }catch(error){
            return error
        }
    }

    render(){
        
        return(
            <div className = "container-master-case">
                 <div className = "header-Cases">
                    <img src = {logoMarca} style = {{maxWidth:"220px",maxHeight:"140px",marginTop:'10px'}} alt = "logomarca do site" />
                    <div className = "search-cases">
                        <DebounceInput type = "text" onChange = {this.getSearchCases.bind(this)} debounceTimeout = {800} placeholder = "Pesquise por casos" />
                        <button className = "but-search-cases" onClick = {this.loadCasesBySearch.bind(this)}>
                            <img src = {search} alt = "Botão de Busca" style = {{width: "50px", height: "50px"}} />
                        </button>
                    </div>
                    <Logout />
                </div>

                <div className = "body-Case">
                <Cases search = {this.state.cases} />
                </div>

                <div className = "buttons-paginate">
                    <button className = "but-paginate" onClick = {this.prevPage.bind(this)} disabled = {this.disableButtonPrevPage()}>Anterior</button>
                    <button className = "but-paginate" onClick = {this.nextPage.bind(this)} disabled = {this.disableButtonNextPage()}>Próximo</button>
                    
                </div>
                <ToastContainer className = 'toast-container'/>
            </div>
        )
    }
}
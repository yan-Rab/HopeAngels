import React, { Component } from 'react';
import api from '../../../services/api';
export default class Form extends Component {

    state = {

        title: "",
        description: "",
        email: "",
        category: "",
        cnpj: "",
        password: "",
        confirmePassword: "",
        categories: [],
        messageError: "",
    }

     componentDidMount(){
       this.loadCategories();

    }

    loadCategories = async() => {
        const response = await api.get("/searchCategories");
        const {docs} = response.data;
        this.setState({categories: docs});
        
    }

    getTitle = (event) => {
        this.setState({title: event.target.value})
    }
    getDescription = (event) => {
        this.setState({description: event.target.value})
    }
    getEmail = (event) => {
        this.setState({email: event.target.value})
    }
    getAtuation = (event) => {
        this.setState({category: event.target.value})
    }
    getCNPJ = (event) => {
        this.setState({cnpj: event.target.value})
    }
    getPassword = (event) => {
        this.setState({password: event.target.value})
    }
    getConfirmPassword = (event) => {
        this.setState({confirmePassword: event.target.value})
    }

    
    disabledButton = () => {
        const {cnpj} = this.state;
        const {password} = this.state;
        const {confirmePassword} = this.state;

        if(password === confirmePassword && cnpj.length === 11){
            return false
        }else{
            return true
        }
    }

    registerOng = async(event) => {
        event.preventDefault();
        const {title} = this.state;
        const {description} =  this.state;
        const {category} = this.state;
        const {email} = this.state;
        const {cnpj} = this.state;
        const {password} = this.state;
        try{

        await api.post("/createOngs", {
            title, description,
            category, email,
            password, cnpj
        });

        }catch(error){
            this.setState({messageError: "Houve um erro ao registrar sua Ong!"})
            
        }

        
    }
   

    render(){
        const {categories} = this.state;
       
        return(
            <div className = "body-form-ongs">
                <form onSubmit = {this.registerOng.bind(this)}>
                <input type = "text" className = "style-inputs" onChange = {this.getTitle.bind(this)} placeholder = "Título da sua Ong" required/>
                <select onClick = {this.getAtuation.bind(this)} required>
                    <option value = "Atuação">Atuação</option>
                    {categories.map(categories => (
                        <option key = {categories._id} value = {categories._id}>
                            {categories.name}
                        </option>
                    ))}
                </select>
                
                <input type = "email" className = "style-inputs" onChange = {this.getEmail.bind(this)} placeholder = "E-mail" required autoFocus />
                <input type = "number" className = "style-inputs" onChange = {this.getCNPJ.bind(this)} placeholder = "CNPJ" required autoFocus />
                <input type = "password" className = "style-inputs" onChange = {this.getPassword.bind(this)} placeholder = "Senha" required />
                <input type = "password" className = "style-inputs" onChange = {this.getConfirmPassword.bind(this)} placeholder = "Confirme sua senha!" required />
                <input type = "text" className = "style-inputs" style = {{width:"100%"}} onChange = {this.getDescription.bind(this)} placeholder = "Faça uma breve descrição" required />
                <button type = "submit" className = "but-register" disabled = {this.disabledButton()}>
                    Registrar
                </button>
                </form>
            </div>
        )
    }
}
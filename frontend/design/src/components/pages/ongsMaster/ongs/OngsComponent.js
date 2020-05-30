import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"
import api from '../../../../services/api';
export default class OngsComponent extends Component {

    state = {
        category: {},
    }

    componentDidMount(){
        this.loadCategory();
    }

    loadCategory = async() => {
        const category = this.props.data.category;
        const response = await api.post('/searchCategoriesById', {category});
        this.setState({category: response.data.categories})
        
    }
   
    render(){
        const {data} = this.props;
        
        return(
           
            <div className = "OngComponent">
                <p><strong>Ong </strong></p>
                <p>{data.title}</p>
                <p><strong>Atuação</strong></p>
                <p>{this.state.category.name}</p>
                <p><strong>E-mail </strong></p>
                <p>{data.email}</p>
                <p><strong>CNPJ</strong></p>
                <p>{data.cnpj}</p>
                <Link to = {`/router-app-cases/${data._id}`} className ="link-conhecer">Conhecer</Link>
            </div>
           
        )
    }
}
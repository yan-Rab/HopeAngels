import React from 'react';
import logomarca from '../../../images/logomarca.png';
import './styles.css';
const Title = () => (
    <div>
        <div className = "Title">
        <img src = {logomarca} style = {{width: "300px",height:"200px",marginBottom:"50px"}} />  
            <p>Registre sua Ong e nos ajude nessa batalha em prol da solidariedade.</p>
        </div>
    </div>
)

export default Title;
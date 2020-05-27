import React from 'react';
import logomarca from '../../../images/logomarca.png';
import './styles.css';
const Title = () => (
    <div>
        <div className = "Title">
        <img src = {logomarca} style = {{maxWidth: "300px",maxHeight:"200px",marginBottom:"50px"}} alt= "logomarca do site"/>  
            <p>Registre sua Ong e nos ajude nessa batalha em prol da solidariedade.</p>
        </div>
    </div>
)

export default Title;
import React from 'react';
import "./styles.css";
import apresentadores from '../../../images/apresentadores.png';
import Contato from './Contato';
const Infors = () => (
    <div className = "body-infors">
        <img src = {apresentadores} style = {{marginLeft: "170px"}} />
        <div className = 'about-we'>
        <h1>Sobre nós</h1>
        <p style = {{fontSize:"20px"}}>
            <p>Graças aos Anjos da Esperança, muitos estão alcançando a paz em seus corações.</p> 
            <p>Essa ajuda está levando pessoas a conhecerem o amor de Jesus que transforma e liberta.</p>
            <p>Faça parte da nossa família Novo Tempo.</p>
        </p>
        
        <Contato />

        </div>
    </div>
)

export default Infors;
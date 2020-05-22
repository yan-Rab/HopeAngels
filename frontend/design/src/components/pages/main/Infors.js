import React from 'react';
import "./styles.css";

import unidos from '../../../images/unidos.png';
import Contato from './Contato';
const Infors = () => (
    <div className = "body-infors">
        <img src = {unidos} style = {{marginLeft: "10%"}} />
        <div className = 'about-we'>
        <h1>Sobre nós</h1>
        <span style = {{fontSize:"20px"}}>
            <p>Graças aos Anjos da Esperança, muitos estão alcançando a paz em seus corações.
            Essa ajuda está levando pessoas a conhecerem o amor de Jesus que transforma e liberta.
            Faça parte da nossa família Novo Tempo.</p>
        </span>
        
        <Contato />

        </div>
    </div>
)

export default Infors;
import React from 'react';
import "./styles.css";

import unidos from '../../../images/unidos.png';
import Contato from './Contato';
const Infors = () => (
    <div className = "body-infors">
        <img src = {unidos} style = {{minWidth:"180px", minHeight:"90px", maxWidth:"700px", maxHeight:"550px"}}  />
        <div className = 'about-we'>
        <h1>Sobre nós</h1>
        <span style = {{fontSize:"22px"}}>
            <p>Graças aos Anjos da Esperança, muitos estão alcançando a paz em seus corações.
            Essa ajuda está levando pessoas a conhecerem o poder da solidariedade que transforma e liberta.
            Faça parte da nossa família e nos ajude a levar esperança para aqueles que mais precisam.</p>
        </span>
        
        <Contato />

        </div>
    </div>
)

export default Infors;
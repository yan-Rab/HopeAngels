import React from 'react';
import cadastro from '../../../images/cloud.png';
import angel from '../../../images/angel.png';
import login from '../../../images/login.png';
import donate from '../../../images/coin.png'
import arrow from '../../../images/back.png';

const styleIcons = {width:"70px",height:"70px"};

const Intructions = () => (
    <div className = "Instructions">
        
        <div className = "div-icons">
            <img src = {cadastro} style = {styleIcons} alt = "Cadastre-se" />
            <p>Cadastre-se</p>
        </div>

        <img src = {arrow} style = {styleIcons} alt = "seta de continuação" />

        <div className = "div-icons">
            <img src = {login} style = {styleIcons} alt = "Efetue o login" />
            <p>Efetue o login</p>
        </div>

        <img src = {arrow} style = {styleIcons} alt = "seta de continuação" />

        <div className = "div-icons">
            <img src = {donate} style = {styleIcons} alt = "Faça uma doação"/>
            <p>Ajude ongs parceiras</p>
        </div>

        <img src = {arrow} style = {styleIcons} alt = "seta de continuação" />

        <div className = "div-icons">
            <img src = {angel} style = {styleIcons} alt = "Torne-se um anjo" />
            <p>Torne-se um Anjo</p>
        </div>

    </div>
)

export default Intructions;
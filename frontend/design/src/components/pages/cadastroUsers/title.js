import React from 'react';
import sejaUmAnjo from '../../../images/anjos-cadastro.png';

const Title = () => (
        <div className = "title">
            <img src = {sejaUmAnjo} style = {{width:"100%" ,height:"100%"}} alt = "imagem de um grupo unido!" />     
            <p>
            Cadastre-se e torne-se um anjo da esperança
            </p>
        
        </div>
)

export default Title;
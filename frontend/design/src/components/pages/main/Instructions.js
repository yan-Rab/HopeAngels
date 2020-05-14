import React from 'react';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {FaRegArrowAltCircleRight, FaDonate, FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {FiLogIn} from 'react-icons/fi';
import {GiAngelOutfit} from 'react-icons/gi';
const styleIcons = {width:"80px",height:"80px",marginLeft:"20%"};
const Intructions = () => (
    <div className = "Instructions">
        <div className = "align-Instructions">
            <div className = "body-Instructions">
                <div style = {{maxWidth:"180px",flexWrap:"wrap"}}>
                    <AiOutlineUserAdd style={styleIcons}/>
                    <p>Cadastre-se</p>
                </div>

                <FaRegArrowAltCircleRight style = {{width:"70px" ,height:"70px",marginLeft:"45px"}} />
                <div style ={{marginLeft:"40px"}}>

                    <FiLogIn style = {styleIcons} />
                    <p>Efetue o Login</p>
                </div>
                
            </div>

            <div className = "body-Instructions">
                <div style = {{maxWidth:"180px",flexWrap:"wrap"}}>
                    <GiAngelOutfit style = {styleIcons} />
                    <p>Torne-se um anjo da esperança</p>
                </div>

                <FaRegArrowAltCircleLeft style = {{width:"80px" ,height:"80px", marginLeft:"13%"}} />
                
                <div style = {{marginLeft:"60px"}}>
                    <FaDonate style = {styleIcons} />
                    <p>Faça uma doação</p>
                </div>
            </div>
        </div>
    </div>
)

export default Intructions;
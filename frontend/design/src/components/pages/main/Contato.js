import React from 'react';
import { FcCallback } from 'react-icons/fc';
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Contato = () => (
    <div className = "body-contato">
        
        <FcCallback style = {{width: "30px", height:"30px"}} />
        <strong style = {{fontSize:"22px",color:"#003366",marginLeft:"10px"}}>Telefone</strong>
        <p style = {{marginTop:"5px",fontSize:"20px"}}>(12) 2127-3030</p>

        <FaWhatsapp style = {{width: "30px", height:"30px", marginTop:"20px"}}/>
        <strong style = {{fontSize:"22px",color:"#009966",marginLeft:"10px"}}>Whatszapp</strong>
        <p style = {{marginTop:"5px",fontSize:"20px"}}>(12) 9 8176-6630</p>

        <AiOutlineMail style = {{width: "30px", height:"30px", marginTop:"20px"}} />
        <strong style = {{fontSize:"22px",color:"#cc6666",marginLeft:"10px"}}>E-mail</strong>
        <p style = {{marginTop:"5px",fontSize:"20px"}}>anjosdaesperanca@novotempo.com</p>
    </div>
)

export default Contato;
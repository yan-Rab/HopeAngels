import { toast } from 'react-toastify';
import React from 'react';

const responseText = (text, icon) => (
    <div className = "icon-text" > 
        <img src = {icon} style = {{width: "40px",height:"40px",marginRight:"5px"}} alt = "Icone do status da requisição" />
        <span>{text}</span>
    </div>
)

export const toastError = (text,icon) => {
    toast.error(responseText(text, icon), {
        position: 'bottom-right',
        pauseOnHover: true,
        autoClose: 3000,
        className: "toast-error",
        draggable: true,
    })
}

export const toastSucess = (text, icon) => (
    toast.success(responseText(text,icon), {
        position: 'bottom-right',
        pauseOnHover: true,
        autoClose: 2000,
        className : "toast-success",
        draggable: true,
    })
)

export const toastDisconnect = (text, icon) => (
    toast.dark(responseText(text,icon), {
        position:"bottom-center",
        pauseOnHover: false,
        autoClose: false,
        className: "toast-disconnect"
    })
)
import React, { Component } from 'react';

export default class LogoutOng extends Component {
    logout = () => {
        localStorage.removeItem("tokenOng");
        localStorage.removeItem("idOng");
        window.location.reload();
    }

    render(){
        return(
            <button onClick = {this.logout.bind(this)}>Deslogar</button>
        )
    }
}
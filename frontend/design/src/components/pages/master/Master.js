import React, { Component } from 'react';


export default class Master extends Component {

    logout = () => {
        localStorage.removeItem("authenticationUsers");
        window.location.reload();
    }

    render(){
        
        return(
            <div>
                Hello User {localStorage.getItem("authenticationUsers")}
                <button onClick = {this.logout.bind(this)} style = {{backgroundColor: "blue"}}>Deslogar</button>
            </div>
        )
    }
}
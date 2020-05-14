import React ,{ Component } from'react';
import "./styles.css";
export default class Logout extends Component {
    logout = () => {
        localStorage.removeItem("authenticationUsers");
        window.location.reload();
    }

    render(){
        return(
            <button onClick = {this.logout.bind(this)} className = "logout-but">Deslogar</button>
        )
    }
}

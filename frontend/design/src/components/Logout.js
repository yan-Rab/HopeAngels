import React ,{ Component } from'react';
export default class Logout extends Component {
    logout = () => {
        localStorage.removeItem("authenticationUsers");
        localStorage.removeItem("userId");
        window.location.reload();
    }

    render(){
        return(
            <button onClick = {this.logout.bind(this)} className = "logout-but">Deslogar</button>
        )
    }
}

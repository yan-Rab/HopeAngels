import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Cadastro from "./components/pages/cadastroUsers/Cadastro";
import Main from "./components/pages/main/Main";
import Login from './components/pages/loginUsers/Login';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Main}/>
            <Route path = "/CadastroUsers" component = {Cadastro}/>
            <Route path = "/LoginUsers" component = {Login} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
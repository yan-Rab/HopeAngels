import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Cadastro from "./components/pages/cadastroUsers/Cadastro";
import Main from "./components/pages/main/Main";
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Main}/>
            <Route path = "/CadastroUsers" component = {Cadastro}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
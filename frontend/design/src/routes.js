import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import React from 'react';

import Cadastro from "./components/pages/cadastroUsers/Cadastro";
import Main from "./components/pages/main/Main";
import Login from './components/pages/loginUsers/Login';
import Master from './components/pages/master/Master';
import { PrivateRouteMaster, PrivateRouteLogin } from './auth/PrivateRoutes';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Main}/>
            <Route path = "/CadastroUsers" component = {Cadastro}/>
            <PrivateRouteLogin path = "/LoginUsers" component = {Login} />
            <PrivateRouteMaster path = "/AnjosDaEsperança" component = {Master} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
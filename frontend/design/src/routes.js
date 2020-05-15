import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

import Cadastro from "./components/pages/cadastroUsers/Cadastro";
import Main from "./components/pages/main/Main";
import Login from './components/pages/loginUsers/Login';
import Master from './components/pages/casesMaster/Master';
import Ongs from './components/pages/ongsMaster/OngsMaster';
import { PrivateRouteMaster, PrivateRouteLogin } from './auth/PrivateRoutes';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Main}/>
            <Route exact path = "/CadastroUsers" component = {Cadastro}/>
            <PrivateRouteLogin exact path = "/LoginUsers" component = {Login} />
            <PrivateRouteMaster exact path = "/AnjosDaEsperança" component = {Master} />
            <Route exact path = "/router-app-ongs" component = {Ongs} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
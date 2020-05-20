import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

import CadastroUsers from "./components/pages/cadastroUsers/Cadastro";
import Main from "./components/pages/main/Main";
import Login from './components/pages/loginUsers/Login';
import CasesMaster from './components/pages/casesMaster/casesMaster';
import OngsMaster from './components/pages/ongsMaster/OngsMaster';
import LoginOngs from './components/pages/loginOngs/LoginOngs';

import { PrivateRouteMaster, PrivateRouteLogin, 
         PrivateRouteMasterCases, PrivateRouteRegisterOngs,
         PrivateRouteRegisterUsers
        } from './auth/PrivateRoutes';

import RegisterOngs from './components/pages/registerOngs/RegisterOngs';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Main}/>
            <PrivateRouteRegisterUsers exact path = "/CadastroUsers" component = {CadastroUsers}/>
            <PrivateRouteLogin exact path = "/LoginUsers" component = {Login} />
            <PrivateRouteMaster exact path = "/router-app-ongs" component = {OngsMaster} />
            <PrivateRouteMasterCases path = "/router-app-cases/:id" component = {CasesMaster} />
            <PrivateRouteRegisterOngs path = "/registerOngs" component = {RegisterOngs} />
            <Route path = '/LoginOngs' component = {LoginOngs} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
import { BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';

import CadastroUsers from "./components/pages/cadastroUsers/Cadastro";
import Main from "./components/pages/main/Main";
import Login from './components/pages/loginUsers/Login';
import CasesMaster from './components/pages/casesMaster/casesMaster';
import OngsMaster from './components/pages/ongsMaster/OngsMaster';
import LoginOngs from './components/pages/loginOngs/LoginOngs';
import MyOng from './components/pages/myOng/MyOng';
import RegisterOngs from './components/pages/registerOngs/RegisterOngs';

import { PrivateRouteMasterOngs, PrivateRouteLogin, 
         PrivateRouteMasterCases, PrivateRouteRegisterOngs,
         PrivateRouteLoginOngs, PrivateRouteMyOng,
         PrivateRouteMain, PrivateRouteRegisterUsers
        } from './auth/PrivateRoutes';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRouteMain exact path = "/" component = {Main}/>
            <PrivateRouteRegisterUsers exact path = "/CadastroUsers" component = {CadastroUsers}/>
            <PrivateRouteLogin exact path = "/LoginUsers" component = {Login} />
            <PrivateRouteMasterOngs exact path = "/router-app-ongs" component = {OngsMaster} />
            <PrivateRouteMasterCases path = "/router-app-cases/:id" component = {CasesMaster} />
            <PrivateRouteRegisterOngs path = "/registerOngs" component = {RegisterOngs} />
            <PrivateRouteLoginOngs path = '/LoginOngs' component = {LoginOngs} />
            <PrivateRouteMyOng path = '/myOng' component = {MyOng} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
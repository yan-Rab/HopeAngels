import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {authUsers} from './AuthUsers';

export const PrivateRouteMaster = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUsers() ? (
            <Component {...props} />
        ) : (
            <Redirect to = {{pathname: "/LoginUsers" , state: { from: props.location } }} />
        )
    )} />
);

export const PrivateRouteLogin = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUsers() ? (
            <Redirect to = {{pathname: "/AnjosDaEsperança", state: { from: props.location}}} />
        ) : (
            <Component {...props} />
        )
    )} />
)

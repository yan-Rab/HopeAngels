import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authUsers } from './AuthUsers';

export const PrivateRouteMaster = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUsers() ? (
            <Component {...props} />
        ) : (
            <Redirect to = {{pathname: "/" , state: { from: props.location } }} />
        )
    )} />
);

export const PrivateRouteLogin = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUsers() ? (
            <Redirect to = {{pathname: "/router-app-ongs", state: { from: props.location}}} />
        ) : (
            <Component {...props} />
        )
    )} />
);

export const PrivateRouteMasterCases = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUsers() ? (
            <Component {...props} />
        ) : (
            <Redirect to = {{pathname: "/", state: {from: props.location}}} />
        )
    )} />
);

export const PrivateRouteRegisterOngs = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUsers() ? (
            <Component {...props} />
        ) : (
            <Redirect to = { {pathname: "/", state: { from: props.location } } } />
        )
    )} />
);

export const PrivateRouteRegisterUsers = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUsers() ? (
            <Redirect to = {{pathname: "/router-app-ongs", state : {from: props.location}}} />
        ) : (
            <Component {...props} />
        )
    )} />
)

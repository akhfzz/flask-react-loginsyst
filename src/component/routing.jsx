import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {LoggedIn} from './ototentikasi'

export const Routing = ({component:Component, ...rest}) => (
    <Route 
        {...rest}
        render={props=> LoggedIn()? (
            <Component {...props}/>
        ) : (
            <Redirect
                to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}
            />
            )
        }
    />
); 
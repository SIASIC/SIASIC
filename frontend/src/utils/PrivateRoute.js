import React, { Component }  from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    // console.log("Private Route")
    // const isAuthenticated = false
    let {user} = useContext(AuthContext)
    return (
        <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>
    )
}

export default PrivateRoute;
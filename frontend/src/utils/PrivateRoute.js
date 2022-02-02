import React, { Component }  from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
    // console.log("Private Route")
    const isAuthenticated = false
    return (
        <Route {...rest}>{!isAuthenticated ? <Redirect to="/login" /> : children}</Route>
    )
}

export default PrivateRoute;
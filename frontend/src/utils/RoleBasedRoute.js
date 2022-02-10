import React, { useEffect, useContext, useState } from "react";
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import AuthContext from "../context/AuthContext";

function RoleBasedRoute({ component: Component, roles, ...rest }) {
	let [authUser, setAuthUser] = useState([])
	let {authToken} = useContext(AuthContext)

	useEffect(() => {
		getAuthUser()
	}, [])

	let getAuthUser = async () => {
		let response = await fetch("http://127.0.0.1:8000/api/user", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				'Authorization': 'Bearer ' + String(authToken.access)
			}
		})
		let data = await response.json()
		setAuthUser(data)
	}

	return (
		<>
			{grantPermission(roles) && (
				<Route
					{...rest}
					render={(props) => (
						<>
							<Component {...props} authuser={authUser}/>
						</>
					)}
				/>
			)}
			{!grantPermission(roles) && (
				<Route
					render={() => (
						<>
							<Redirect to="/app/404" />
						</>
					)}
				/>
			)}
		</>
	);
}

export const grantPermission = (requestedRoles) => {

    let user = jwt_decode(localStorage.getItem("authToken"))
    if (requestedRoles.indexOf(user.user_level) > -1){
        return true;
    }
	// in case of multiple roles, if one of the permittedRoles is present in requestedRoles, return true;
	return false;
};

export default RoleBasedRoute;

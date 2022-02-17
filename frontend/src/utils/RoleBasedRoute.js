import React, { useEffect, useContext, useState } from "react";
import { Route, Redirect, useHistory } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import AuthContext from "../context/AuthContext";

function RoleBasedRoute({ component: Component, roles, ...rest }) {
	let [authUser, setAuthUser] = useState([])
	let {authToken} = useContext(AuthContext)
	const history = useHistory();

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
		if (response['status'] === 200){
			let data = await response.json()
			setAuthUser(data)
		}else{
			localStorage.removeItem("authToken");
			history.push("/login");
			// AuthContext.logoutUser()
		}
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

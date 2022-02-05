import React from "react";
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";

function RoleBasedRoute({ component: Component, roles, ...rest }) {
	return (
		<>
			{grantPermission(roles) && (
				<Route
					{...rest}
					render={(props) => (
						<>
							<Component {...props} />
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

import React from "react";

function Login({authuser}) {

	return (
		<div>
            Ini Admin {authuser.role}
        </div>
	);
}

export default Login;

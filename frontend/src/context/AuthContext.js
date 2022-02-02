import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	let [authToken, setAuthToken] = useState(() =>
		localStorage.getItem("authToken")
			? JSON.parse(localStorage.getItem("authToken"))
			: null
	);
	let [user, setUser] = useState(() =>
		localStorage.getItem("authToken")
			? jwt_decode(localStorage.getItem("authToken"))
			: null
	);

	const history = useHistory();

	let loginUser = async (e) => {
		e.preventDefault();

		console.log("Form submit");

		let formData = JSON.stringify({
			username: e.target.username.value,
			password: e.target.password.value,
		});

		let response = await fetch("http://127.0.0.1:8000/api/token/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: formData,
		});

		let data = await response.json();
		console.log("data:", data);
		console.log("response:", response);

		if (response["status"] == 200) {
			// console.log(data['access'])
			// console.log(data['refresh'])
			setAuthToken(data);
			setUser(jwt_decode(data.access));

			localStorage.setItem("authToken", JSON.stringify(data));

			history.push("/app");
		} else {
			alert(data["detail"]);
			console.log(data["detail"]);
		}
	};

	let logoutUser = () => {
		// console.log("Logout")
        setAuthToken(null);
		setUser(null);
		localStorage.removeItem("authToken");
		history.push("/login");
	};

	let contextData = {
		user: user,
		loginUser: loginUser,
        logoutUser: logoutUser,
	};

	return (
		<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
	);
};

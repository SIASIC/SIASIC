import React, { lazy } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import PrivateRoute from "./utils/PrivateRoute";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<AccessibleNavigationAnnouncer />
					<Switch>
						<Route path="/create-account" component={CreateAccount} />
						<Route path="/forgot-password" component={ForgotPassword} />
						<Route path="/login" component={Login} />

						<PrivateRoute path="/header" component={Header} />

						{/* Place new routes over this */}
						<PrivateRoute path="/app" component={Layout} />
						{/* If you have an index page, you can remothis Redirect */}
						<Redirect exact from="/" to="/login" />
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;

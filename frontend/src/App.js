import React, { lazy } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import RoleBasedRoute from "./utils/RoleBasedRoute";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

const AdminPage = lazy(() => import("./pages/testPages/Admin"))
const AtasanPage = lazy(() => import("./pages/testPages/Atasan"))
const PejabatPage = lazy(() => import("./pages/testPages/Pejabat"))
const BapegPage = lazy(() => import("./pages/testPages/Bapeg"))


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

						<RoleBasedRoute exact path="/admin" component={AdminPage} roles={['1', '2']} />
						<RoleBasedRoute exact path="/atasan" component={AtasanPage} roles={['2']} />
						<RoleBasedRoute exact path="/pejabat" component={PejabatPage} roles={['3']} />
						<RoleBasedRoute exact path="/bapeg" component={BapegPage} roles={['4']} />

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

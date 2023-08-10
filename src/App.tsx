import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Home from './components/home';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Sidebar />}>
					<Route element={<Home />} index />
					<Route path="performance" element={<div>Performance</div>} />
					<Route path="account" element={<div>Account</div>} />
					<Route path="settings" element={<div>Settings</div>} />
					<Route path="premium" element={<div>Premium</div>} />
				</Route>
				{/* <Route path="auth/*" element={<LayoutAuth />}>
			  <Route index path="register" element={<RegisterForm />} />
			  <Route path="login" element={<LoginForm />} />
			  <Route />
			</Route> */}
			</>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;

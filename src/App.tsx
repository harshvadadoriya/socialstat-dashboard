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
import Terms from './components/terms';
import Condition from './components/condition';
import PageNotFound from './components/pageNotFound';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Sidebar />}>
					<Route element={<Home />} index />
					<Route
						path="performance"
						element={<div className="p-3 min-h-[80%]">Performance</div>}
					/>
					<Route
						path="account"
						element={<div className="p-3 min-h-[80%]">Account</div>}
					/>
					<Route
						path="settings"
						element={<div className="p-3 min-h-[80%]">Settings</div>}
					/>
					<Route
						path="premium"
						element={<div className="p-3 min-h-[80%]">Premium</div>}
					/>
					<Route path="terms" element={<Terms />} />
					<Route path="condition" element={<Condition />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
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

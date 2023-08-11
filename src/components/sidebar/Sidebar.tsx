import React from 'react';
import Logo from '../logo';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Header from '../header';
import { sideBarRoute } from '../../constant/sidebarRoutes';

const Sidebar = () => {
	const location = useLocation();
	return (
		<div className="flex min-h-screen ">
			<div className="w-[15rem] overflow-hidden border-r">
				<div className="flex h-screen flex-col justify-between pt-2 pb-6">
					<div>
						<Logo />
						<ul className="mt-6 space-y-2 tracking-wide sidebar-nav">
							{sideBarRoute.map(({ label, path, icon: Icon }) => {
								return (
									<li
										key={path}
										className={`min-w-max hover:bg-primary-red-light ${
											location.pathname === path ? 'bg-primary-red-light' : ''
										} `}
									>
										<NavLink to={path}>
											<div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
												<Icon className="group-hover:text-primary-red-dark" />
												<span className="group-hover:text-primary-red-dark">
													{label}
												</span>
											</div>
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full border-l-2 border-gray-50">
				<Header />
				<Outlet />
			</div>
		</div>
	);
};

export default Sidebar;

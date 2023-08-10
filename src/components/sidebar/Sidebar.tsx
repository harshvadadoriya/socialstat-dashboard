import React from 'react';
import Logo from '../logo';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../header';
import {
	AiOutlineDashboard,
	AiOutlineCloseSquare,
	AiOutlineCrown,
} from 'react-icons/ai';
import { PiCalendarCheckLight, PiPlugsLight } from 'react-icons/pi';

const Sidebar = () => {
	return (
		<div className="flex min-h-screen ">
			<div className="w-[15rem] overflow-hidden border-r">
				<div className="flex h-screen flex-col justify-between pt-2 pb-6">
					<div>
						<Logo />
						<ul className="mt-6 space-y-2 tracking-wide sidebar-nav">
							<li className="min-w-max hover:bg-primary-red-light">
								<NavLink to="/">
									<div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
										<AiOutlineDashboard className="group-hover:text-primary-red-dark" />
										<span className="group-hover:text-primary-red-dark">
											Dashboard
										</span>
									</div>
								</NavLink>
							</li>
							<li className="min-w-max hover:bg-primary-red-light">
								<NavLink to="/performance">
									<div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
										<AiOutlineCloseSquare className="group-hover:text-primary-red-dark" />
										<span className="group-hover:text-primary-red-dark">
											Performance
										</span>
									</div>
								</NavLink>
							</li>
							<li className="min-w-max hover:bg-primary-red-light">
								<NavLink to="account">
									<div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
										<PiCalendarCheckLight className="group-hover:text-primary-red-dark" />
										<span className="group-hover:text-primary-red-dark">
											Account
										</span>
									</div>
								</NavLink>
							</li>
							<li className="min-w-max hover:bg-primary-red-light">
								<NavLink to="settings">
									<div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
										<PiPlugsLight className="group-hover:text-primary-red-dark" />
										<span className="group-hover:text-primary-red-dark">
											Settings
										</span>
									</div>
								</NavLink>
							</li>
							<li className="min-w-max hover:bg-primary-red-light">
								<NavLink to="premium">
									<div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
										<AiOutlineCrown className="group-hover:text-primary-red-dark" />
										<span className="group-hover:text-primary-red-dark">
											Premium
										</span>
									</div>
								</NavLink>
							</li>
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

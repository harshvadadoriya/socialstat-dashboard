import React from 'react';
import Logo from '../logo';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import { sideBarRoute } from '@constants/sidebarRoutes';
import Footer from '../footer/Footer';
import SidebarNav from './sidebarNav';

const Sidebar = () => {
	return (
		<div className="flex min-h-screen ">
			<div className="w-[15rem] overflow-hidden border-r">
				<div className="flex h-screen flex-col justify-between pt-2 pb-6">
					<div>
						<Logo />
						<ul className="mt-6 space-y-2 tracking-wide sidebar-nav">
							{sideBarRoute.map(({ label, path, icon: Icon }) => (
								<SidebarNav key={path} label={label} path={path} icon={Icon} />
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full border-l-2 border-gray-50">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Sidebar;

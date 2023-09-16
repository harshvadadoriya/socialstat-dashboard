import React from 'react';
import { IconType } from 'react-icons';
import { NavLink, useLocation } from 'react-router-dom';

type SidebarNavProps = {
	label: string;
	path: `/${string}`;
	icon: IconType;
};

const SidebarNav: React.FC<SidebarNavProps> = ({ label, path, icon: Icon }) => {
	const location = useLocation();
	return (
		<li
			className={`min-w-max hover:bg-primary-red-light ${
				location.pathname === path ? 'bg-primary-red-light' : ''
			} `}
		>
			<NavLink to={path}>
				<div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
					<Icon className="group-hover:text-primary-red-dark" />
					<span className="group-hover:text-primary-red-dark">{label}</span>
				</div>
			</NavLink>
		</li>
	);
};

export default SidebarNav;

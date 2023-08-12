import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
	return (
		<>
			<NavLink to="/" className="w-max p-4 flex items-center">
				<img src="/assets/logo.svg" alt="logo" />
			</NavLink>
		</>
	);
};

export default Logo;

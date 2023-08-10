import React from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Logo = () => {
	return (
		<>
			<NavLink to="/" className="w-max p-4 flex items-center">
				<AiOutlineRise className="text-primary-red-dark" size={20} />
				<h1 className="text-lg font-medium ml-2">SOCIALSTAT</h1>
			</NavLink>
		</>
	);
};

export default Logo;

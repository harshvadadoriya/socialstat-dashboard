import React from 'react';
import { year } from '@utils/currentYear';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="relative bottom-0 left-0 w-full h-10 my-5 flex items-center justify-between pl-3 pr-7">
			<div>
				<h1 className="text-gray-400">Copyright @ {year} Socialstat Inc.</h1>
			</div>
			<div className="flex justify-between">
				<Link to="/terms">
					<h1 className="mr-6 text-primary-red-dark underline">Terms</h1>
				</Link>
				<Link to="/condition">
					<h1 className="text-primary-red-dark underline">Conditions</h1>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;

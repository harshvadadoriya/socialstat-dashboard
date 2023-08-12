import React from 'react';
import Daily from './daily';
import Monthly from './monthly';

const Visitor = () => {
	return (
		<div className="flex flex-wrap">
			<div className="flex-1">
				<Daily />
			</div>
			<div className="flex-1">
				<Monthly />
			</div>
		</div>
	);
};

export default Visitor;

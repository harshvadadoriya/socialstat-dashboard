import React from 'react';
import socialData from '../../constant/social';

const Social = () => {
	return (
		<div className="p-3 h-[8rem] flex text-center">
			{socialData.map(({ id, icon: Icon, name }) => (
				<div
					className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white text-gray-700 cursor-pointer rounded-lg"
					key={id}
				>
					<div className="flex flex-col items-center mx-2">
						<Icon size="1.5rem" />
						<p className="text-[1rem]">{name}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Social;

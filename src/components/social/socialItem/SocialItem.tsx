import React from 'react';
import { IconType } from 'react-icons/lib';

type SocialItemProps = {
	icon: IconType;
	name: string;
};

const SocialItem: React.FC<SocialItemProps> = ({ icon: Icon, name }) => {
	return (
		<div className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white text-gray-700 cursor-pointer rounded-lg">
			<div className="flex flex-col items-center mx-2">
				<Icon size="1.5rem" />
				<p className="text-[1rem]">{name}</p>
			</div>
		</div>
	);
};

export default SocialItem;

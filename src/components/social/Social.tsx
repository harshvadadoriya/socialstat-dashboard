import React from 'react';
import socialData from '@constants/social';
import SocialItem from './socialItem/';

const Social = () => {
	return (
		<div className="p-3 h-[8rem] flex text-center">
			{socialData.map(({ id, icon: Icon, name }) => (
				<SocialItem key={id} icon={Icon} name={name} />
			))}
		</div>
	);
};

export default Social;

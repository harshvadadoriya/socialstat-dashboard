import React from 'react';

type StatisticCount = {
	raw: number;
	formatted: string;
};

type StatisticItemProps = {
	name: string;
	count: StatisticCount;
	rise: boolean;
};

const StatisticItem: React.FC<StatisticItemProps> = ({ name, count, rise }) => {
	return (
		<div className="w-full flex cursor-pointer rounded-lg justify-center mx-2">
			<div className="flex flex-col p-5 justify-center">
				<p className="text-primary-red-dark font-medium flex">{name}</p>
				<div className="flex items-center">
					<p className="font-bold text-[2rem] text-gray-800">
						{count.formatted}
					</p>
					<img
						src={`/assets/${rise ? 'line-rise.svg' : 'line-fall.svg'}`}
						alt="line-type"
						className="ml-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default StatisticItem;

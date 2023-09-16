import React from 'react';
import statisticData from '@constants/statistic';
import StatisticItem from './statisticItem/StatisticItem';

const Statistic = () => {
	return (
		<>
			<div className="p-3">
				<div>
					<h1 className="font-bold text-gray-800">WEEKLY STATISTICS</h1>
				</div>
				<div className="h-[8rem] flex text-center">
					{statisticData.map(({ id, count, rise, name }) => (
						<StatisticItem key={id} count={count} rise={rise} name={name} />
					))}
				</div>
			</div>
		</>
	);
};

export default Statistic;

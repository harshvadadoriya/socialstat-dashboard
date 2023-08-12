import React from 'react';
import statisticData from '../../constant/statistic';

const Statistic = () => {
	return (
		<>
			<div className="p-3">
				<div>
					<h1 className="font-bold text-gray-800">WEEKLY STATISTICS</h1>
				</div>
				<div className="h-[8rem] flex text-center">
					{statisticData.map(({ id, count, rise, name }) => (
						<div
							className="w-full flex cursor-pointer rounded-lg justify-center mx-2"
							key={id}
						>
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
					))}
				</div>
			</div>
		</>
	);
};

export default Statistic;

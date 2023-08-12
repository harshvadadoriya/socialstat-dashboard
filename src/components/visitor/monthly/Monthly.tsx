import React from 'react';
import Chart from '../../recharts/Chart';
import { monthlyData } from '../../../constant/chartData';

const Monthly = () => {
	return (
		<Chart
			chartType="bar"
			title="MONTHLY VISITORS"
			data={monthlyData}
			xAxisDataKey="month"
			yAxisDataKey="visitors"
		/>
	);
};

export default Monthly;

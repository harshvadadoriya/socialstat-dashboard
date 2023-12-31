import React from 'react';
import Chart from '../../recharts/Chart';
import { dailyData } from '@constants/chartData';

const Daily = () => {
	return (
		<Chart
			chartType="line"
			title="DAILY VISITOR"
			data={dailyData}
			yAxisDataKey="visitors"
			xAxisDataKey="time"
		/>
	);
};

export default Daily;

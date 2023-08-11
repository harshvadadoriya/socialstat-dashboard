import React, { FC } from 'react';
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	Bar,
	Cell,
	Area,
	AreaChart,
} from 'recharts';
import randomNumber from '../../utils/randomNumber';
import { barColors, formatNumber } from '../../utils/chartUtils';
import { ChartDataType } from '../../interface/interface';
import { formatCount } from '../../utils/formatCount';

type ChartProps = {
	chartType: 'line' | 'bar';
	title: string;
	data: ChartDataType;
	xAxisDataKey: string;
	yAxisDataKey: string;
};

const ChartType: Record<
	ChartProps['chartType'],
	typeof AreaChart | typeof BarChart
> = {
	line: AreaChart,
	bar: BarChart,
};
interface DataPoint {
	time: string;
	visitors: number;
}

interface CustomTooltipProps {
	active?: boolean;
	payload?: Array<{ payload: DataPoint }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
	if (active && payload && payload.length) {
		const data = payload[0].payload;
		return (
			<div className="custom-tooltip bg-primary-red-dark rounded-md px-5 py-2 text-white flex flex-col items-center">
				<p className="font-medium text-xl">{formatCount(data.visitors)}</p>
				<p className="text-xs">{data.time} AM</p>
			</div>
		);
	}
	return null;
};

const Chart: FC<ChartProps> = ({
	chartType,
	title,
	data,
	xAxisDataKey,
	yAxisDataKey,
}) => {
	const CurrentChart = ChartType[chartType];

	return (
		<div className="flex-col text-gray-700 cursor-pointer w-full">
			<div className="flex">
				<h1 className="font-bold text-gray-800 mb-3 ml-3">{title}</h1>
			</div>
			<div className="h-[20rem] mt-3">
				<ResponsiveContainer width="100%">
					<CurrentChart
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid
							strokeDasharray="0.4 1"
							horizontal={false}
							fillOpacity={0.6}
						/>
						<XAxis dataKey={xAxisDataKey} />
						<YAxis tickFormatter={formatNumber} tickCount={6} />
						{chartType === 'line' ? (
							<Tooltip content={<CustomTooltip />} />
						) : (
							<Tooltip />
						)}
						{chartType === 'line' && (
							<>
								<defs>
									<linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#FF3F40" stopOpacity={1} />
										<stop offset="100%" stopColor="#FF3F40" stopOpacity={0} />
									</linearGradient>
								</defs>
								<Area
									type="monotone"
									dataKey={yAxisDataKey}
									stroke="#FF3F40"
									fill="url(#gradientFill)"
									activeDot={{ r: 8 }}
									dot={false}
									animationEasing="linear"
									animationDuration={1000}
								/>
							</>
						)}
						{chartType === 'bar' && (
							<>
								<Bar dataKey={yAxisDataKey}>
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={barColors[randomNumber(0, barColors.length)]}
											width={20}
										/>
									))}
								</Bar>
								<Bar dataKey={xAxisDataKey} fill="#82ca9d" />
							</>
						)}
					</CurrentChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default Chart;

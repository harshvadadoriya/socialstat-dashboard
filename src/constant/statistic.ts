import { StatisticItem } from '../interface/interface';

const statisticData: StatisticItem[] = [
	{
		id: 1,
		name: 'USERS',
		count: { raw: 12924, formatted: '12,924' },
		rise: true,
	},
	{
		id: 2,
		name: 'NEW USERS',
		count: { raw: 5200, formatted: '5,200' },
		rise: false,
	},
	{
		id: 3,
		name: 'PAGE VIEW',
		count: { raw: 476000, formatted: '476k' },
		rise: true,
	},
	{
		id: 4,
		name: 'BOUCE RATE',
		count: { raw: 43.5, formatted: '43.5%' },
		rise: false,
	},
];

export default statisticData;

import { IconType } from 'react-icons';

export interface SocialItem {
	id: number;
	name: string;
	icon: IconType;
}

interface StatisticCount {
	raw: number;
	formatted: string;
}

export interface StatisticItem {
	id: number;
	name: string;
	count: StatisticCount;
	rise: boolean;
}

export type ChartDataType = Record<string, string | number>[];

export type SideBarRouteType = {
	label: string;
	path: `/${string}`;
	icon: IconType;
}[];

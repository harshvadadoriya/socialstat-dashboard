import {
	AiOutlineDashboard,
	AiOutlineCloseSquare,
	AiOutlineCrown,
} from 'react-icons/ai';
import { PiCalendarCheckLight, PiPlugsLight } from 'react-icons/pi';
import { SideBarRouteType } from '../interface/interface';
export const sideBarRoute: SideBarRouteType = [
	{
		label: 'Dashboard',
		path: '/',
		icon: AiOutlineDashboard,
	},
	{
		label: 'Performance',
		path: '/performance',
		icon: AiOutlineCloseSquare,
	},
	{
		label: 'Account',
		path: '/account',
		icon: PiCalendarCheckLight,
	},
	{
		label: 'Settings',
		path: '/settings',
		icon: PiPlugsLight,
	},
	{
		label: 'Premium',
		path: '/premium',
		icon: AiOutlineCrown,
	},
];

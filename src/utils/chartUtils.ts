export const barColors = [
	'#FF5B5A',
	'#58CEFF',
	'#4A52FF',
	'#00A28A',
	'#AB53DB',
	'#FFBC54',
];

export function formatNumber(num: number): string {
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1) + 'M';
	}
	if (num >= 1000) {
		return (num / 1000).toFixed(0) + 'K';
	}
	return num.toLocaleString();
}

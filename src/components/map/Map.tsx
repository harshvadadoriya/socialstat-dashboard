import React from 'react';
import { countriesData } from '@constants/countriesData';
import { formatCount } from '@utils/formatCount';

const Map = () => {
	return (
		<div className="p-3">
			<div>
				<h1 className="font-bold text-gray-800">WORLD MAP</h1>
			</div>
			<div className="flex text-center mt-3">
				<div className="flex-1">
					<img src="assets/world-map.svg" width="100%" alt="map" />
				</div>
				<div className="flex-1 pl-8">
					<table className="w-full text-left">
						<thead>
							<tr>
								<th className="p-2 text-gray-800">Country</th>
								<th className="p-2 text-gray-800">Visitors</th>
								<th className="p-2 text-gray-800">% Users</th>
							</tr>
						</thead>
						<tbody>
							{countriesData.map(
								({ id, color, name, visitors, usersPercentage }) => (
									<tr key={id}>
										<td className="flex items-center p-2 py-4">
											<span
												className="inline-block w-[0.6rem] h-[0.6rem] rounded-full"
												style={{
													backgroundColor: color,
													marginRight: '0.5rem',
												}}
											></span>
											{name}
										</td>
										<td className="p-2">{formatCount(visitors)}</td>
										<td className="p-2">{usersPercentage}</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Map;

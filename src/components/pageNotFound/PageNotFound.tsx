import React from 'react';

const PageNotFound = () => {
	return (
		<div className="flex items-center justify-center relative min-h-[80%]">
			<div className="p-8 text-center rounded-md">
				<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
				<p className="text-gray-600">
					The page you're looking for doesn't exist. Please check the URL or
					navigate back to the homepage.
				</p>
			</div>
		</div>
	);
};

export default PageNotFound;

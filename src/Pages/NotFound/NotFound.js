import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="text-center my-5 py-5">
			<h1 style={{fontSize: '14vw'}} className="text-danger">404</h1>
			<h1>Page Not Found</h1>
			<Link to="/">
			<button className="theme-secondary-btn w-md-50 w-lg-50 mt-4">Back to Home Page</button>
			</Link>
		</div>
	);
};

export default NotFound;
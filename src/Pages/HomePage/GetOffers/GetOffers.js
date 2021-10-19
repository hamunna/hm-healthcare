import React from 'react';
import { Container } from 'react-bootstrap';
import './GetOffers.css';

const GetOffers = () => {
	return (
		<div className="theme-primary-bg py-4">
			<Container>
				<div className="d-md-flex d-md-column d-sm-flex flex-sm-row align-items-center justify-content-evenly">
					<div>
						<h3 className="fs-1 fw-bolder text-white text-center">Get Offers</h3>
					</div>

					<div id="get-offers-filed">
						<input type="email" name="get-offers" id="get-offers" placeholder="Your Email" />
						<button className="btn-pill">Get Offer</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default GetOffers;
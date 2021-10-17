import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
	const { image, name, speciality } = doctor;
	return (
		<div>
			<Col>
				<Card>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title className="text-uppercase fw-bold theme-primary-text">{name}</Card.Title>
						<Card.Text>{speciality}</Card.Text>

						<button className="theme-primary-btn">View Details</button>
					</Card.Body>
				</Card>
			</Col>
		</div>
	);
};

export default Doctor;
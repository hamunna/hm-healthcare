import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
	const { image, title, description } = service;
	return (
		<>
			<Col>
				<Card>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title className="text-uppercase fw-bold theme-primary-text">{title}</Card.Title>
						<Card.Text>{description}</Card.Text>

						<button className="theme-primary-btn">View Details</button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default Service;
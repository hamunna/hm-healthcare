import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
	const { id, image, title, description } = service;
	return (
		<>
			<Col>
				<Card id="service-card">
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title className="text-uppercase fw-bold theme-primary-text">{title}</Card.Title>
						<Card.Text>{description}</Card.Text>

						<Link to={`/serviceDetails/${id}`}>
							<button className="theme-primary-btn">View Details</button>
						</Link>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default Service;
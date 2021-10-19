import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceDetail = ({ServiceDetail}) => {
	const { id, image, title, description } = ServiceDetail;

	return (
		<>
			<Col>
				<Card>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title className="text-uppercase fw-bold theme-primary-text">{title}</Card.Title>
						<Card.Text>{description}</Card.Text>

					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default ServiceDetail;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Doctor = ({ doctor }) => {
	const { image, name, speciality } = doctor;
	return (
		<div>
			<Col>
				<Card id="doctor-card">
					<div className="doc-card-content text-center">
						<Card.Img variant="top" src={image} />
						<Card.Body>
							<Card.Title className="text-uppercase fw-bold theme-primary-text">{name}</Card.Title>
							<Card.Text className="theme-secondary-text fw-bold">{speciality}</Card.Text>

							<button className="theme-primary-btn">View Details</button>
						</Card.Body>
					</div>

					<div className="doc-social-icons d-flex gap-4 justify-content-evenly">
						<SocialIcon bgColor="#5663c1" url="https://www.facebook.com" style={{ height: 30, width: 30 }} />
						<SocialIcon bgColor="#5663c1" url="https://www.twitter.com" style={{ height: 30, width: 30 }} />
						<SocialIcon bgColor="#5663c1" url="https://www.linkedin.com" style={{ height: 30, width: 30 }} />
						<SocialIcon bgColor="#5663c1" url="https://www.pinterest.com" style={{ height: 30, width: 30 }} />
					</div>
				</Card>
			</Col>
		</div>
	);
};

export default Doctor;
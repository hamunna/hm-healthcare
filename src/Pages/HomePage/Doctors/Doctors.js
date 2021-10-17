import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import doctor1 from '../../../images/doctors/doctor-1.jpg';
import doctor2 from '../../../images/doctors/doctor-2.jpg';
import doctor3 from '../../../images/doctors/doctor-3.jpg';
import doctor4 from '../../../images/doctors/doctor-4.jpg';

const Doctors = () => {
	return (
		<div>
			<Container>
				<div className="text-center my-5">
					<h2 className="theme-primary-text text-uppercase fw-bold">Our Best Doctor</h2>
					<p className="text-secondary">Medical professionals, organizations, and ancillary health care
						<br /> workers who provide medical care</p>
				</div>

				<div>
					<Row xs={1} md={3} className="g-4">

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

					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Doctors;
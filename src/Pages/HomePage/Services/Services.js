import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('services.json')
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<div id="services" style={{ backgroundColor: '#f2f2f2', padding: '70px' }}>
			<Container>
				<div className="text-center mb-5">
					<h2 className="theme-primary-text text-uppercase fw-bold">Our Services</h2>
					<p className="text-secondary">Medical professionals, organizations, and ancillary health care
						<br /> workers who provide medical care</p>
				</div>

				<div>
					<Row xs={1} md={3} className="g-4">
						{
							services.map(service => <Service
								key={service.id}
								service={service}
							></Service>)
						}
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Services;
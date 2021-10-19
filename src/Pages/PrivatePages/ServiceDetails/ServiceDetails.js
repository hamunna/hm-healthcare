import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';


const ServiceDetails = () => {
	const { serviceId } = useParams();

	const [servicesDetails, setServicesDetails] = useState([]);
	const [singleService, setSingleService] = useState({});

	useEffect(() => {
		fetch("/services.json")
			.then((res) => res.json())
			.then((data) => setServicesDetails(data));
	}, []);

	useEffect(() => {
		const findService = servicesDetails.find(
			(service) => service.id === serviceId
		);
		setSingleService(findService);
	}, [servicesDetails]);


	return (
		<div>

			<Container>
				<Card className="w-50 my-5 mx-auto">
					<Card.Img className="img-fluid" variant="top" src={singleService?.image} />
					<Card.Body>
						<Card.Title className="text-uppercase fw-bold theme-primary-text">{singleService?.title}</Card.Title>
						<Card.Text>{singleService?.description}</Card.Text>

					</Card.Body>
				</Card>
			</Container>

		</div>
	);
};

export default ServiceDetails;
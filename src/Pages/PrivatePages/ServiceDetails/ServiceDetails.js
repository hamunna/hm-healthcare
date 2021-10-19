import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('services.json')
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	// const { serviceId } = useParams();

	return (
		<div style={{marginTop: '300px'}}>
			{
				services.map(ServiceDetail => <ServiceDetail
					key={ServiceDetail.id}
					ServiceDetail={ServiceDetail}
				></ServiceDetail>)
			}
		</div>
	);
};

export default ServiceDetails;
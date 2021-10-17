import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		fetch('doctors.json')
			.then(res => res.json())
			.then(data => setDoctors(data));
	}, []);

	return (
		<div>
			<Container>
				<div className="text-center my-5">
					<h2 className="theme-primary-text text-uppercase fw-bold">Our Best Doctor</h2>
					<p className="text-secondary">Medical professionals, organizations, and ancillary health care
						<br /> workers who provide medical care</p>
				</div>

				<div>
					<Row xs={2} md={4} className="g-4">

						{
							doctors.map(doctor => <Doctor
								key={doctor.id}
								doctor={doctor}
							></Doctor>)
						}

					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Doctors;
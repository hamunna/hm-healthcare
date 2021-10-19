import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './Covid.css';

const Covid = () => {
	return (
		<div id="covid">
			<div id="covid-overly">
				<Container>
					<div id="covid-content">
						<h1 className="fw-bolder text-center">COVID-19 / Corona Virus Statistics</h1>

						<Table striped bordered hover variant="dark" className="h2">
							<tbody>
								<tr>
									<td>Coronavirus Cases:</td>
									<td className="text-warning fw-bold">241,915,730</td>
								</tr>

								<tr>
									<td>Death:</td>
									<td className="text-danger fw-bold">4,921,324</td>
								</tr>

								<tr>
									<td>Recovered:</td>
									<td className="text-success fw-bold">219,250,596</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Covid;
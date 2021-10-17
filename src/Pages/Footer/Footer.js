import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row xs={2} md={4} className="g-4">

					{/* Address and Social Icons */}
					<Card>

						<h5 className="fw-bolder">HM-Healthcare</h5>
						<p><small><strong>Location: </strong>West Zindabazar, Sylhet</small></p>
						<p><small><strong>Phone: </strong>++8801787654321</small></p>
						<p><small><strong>Email: </strong>info@hmcare.com</small></p>
						
						<p><small><strong>Social Icons will go here...</strong></small></p>

					</Card>

					{/* Health Support */}
					<Card>

						<h5 className="fw-bolder">Support</h5>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Health Center</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Terms of Service</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Our Pricing</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Testimonials</a></strong></small></p>

					</Card>

					{/* Services */}
					<Card>

						<h5 className="fw-bolder">Services</h5>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Cosmetic Surgery</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">General Surgery</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Authorized Diagonostic</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">New Technology</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Accept Insurance</a></strong></small></p>

					</Card>

					{/* Useful Links */}
					<Card>

						<h5 className="fw-bolder">Useful Links</h5>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">About Us</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Our Services</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Appointment</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Treatment Policy</a></strong></small></p>
						<p><small><strong><a href="#" className="text-decoration-none text-dark">Contact Us</a></strong></small></p>

					</Card>

				</Row>

				<div className="my-3 border-top-1 text-center">
					<p>Copyright &copy; 2021 &bullet; HM-Healthcare all rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
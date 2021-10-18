import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<Container>
				<div className="d-flex justify-content-between py-4">

					{/* Address and Social Icons */}
					<div>

					<Link to="#home" className="text-decoration-none"><h4 className="theme-primary-text fw-bolder"><span className="theme-secondary-text">HM-</span>Healthcare</h4></Link>
						<p><small><strong>Location: </strong>West Zindabazar, Sylhet</small></p>
						<p><small><strong>Phone: </strong>++8801787654321</small></p>
						<p><small><strong>Email: </strong>info@hmcare.com</small></p>

						<p><small><strong>Social Icons will go here...</strong></small></p>

					</div>

					{/* Health Support */}
					<div>

						<h5 className="fw-bolder">Support</h5>
						<p><small><a href="#" className="text-decoration-none text-white">Health Center</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Terms of Service</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Privacy Policy</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Our Pricing</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Testimonials</a></small></p>

					</div>

					{/* Services */}
					<div>

						<h5 className="fw-bolder">Services</h5>
						<p><small><a href="#" className="text-decoration-none text-white">Cosmetic Surgery</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">General Surgery</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Authorized Diagonostic</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">New Technology</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Accept Insurance</a></small></p>

					</div>

					{/* Useful Links */}
					<div>

						<h5 className="fw-bolder">Useful Links</h5>
						<p><small><a href="#" className="text-decoration-none text-white">About Us</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Our Services</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Appointment</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Treatment Policy</a></small></p>
						<p><small><a href="#" className="text-decoration-none text-white">Contact Us</a></small></p>

					</div>

				</div>

			</Container>

			<Container>
				<div className="py-3 border-top-1 text-center border-top border-secondary">
					<p>Copyright &copy; 2021 &bull; HM-Healthcare &bull; all rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
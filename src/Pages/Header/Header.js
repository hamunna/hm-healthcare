import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg" fixed="top">
				<Container>
					<Navbar.Brand to="#home"><h4 className="theme-primary-text fw-bolder"><span className="theme-secondary-text">HM-</span>Healthcare</h4></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto fw-bold">

							<Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
							<Nav.Link as={HashLink} to="/home#about">About us</Nav.Link>
							<Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
							<Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
						</Nav>

						<Navbar.Collapse className="justify-content-end">

							<Nav.Link as={HashLink} to="/login">
								<a className="theme-primary-text fw-bolder text-decoration-none">Login</a>
							</Nav.Link>

							<button className="theme-secondary-btn mx-5">Sign Up</button>
							<Navbar.Text>
								Signed in as: <a href="#login">Mark Otto</a>
							</Navbar.Text>
						</Navbar.Collapse>
					</Navbar.Collapse>
				</Container>
			</Navbar>


		</header>
	);
};

export default Header;
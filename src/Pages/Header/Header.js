import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto fw-bold">

							<Nav.Link href="/home#home">Home</Nav.Link>
							<Nav.Link href="/home#about">About us</Nav.Link>
							<Nav.Link href="/home#services">Services</Nav.Link>
							<Nav.Link href="/home#doctors">Doctors</Nav.Link>
						</Nav>

						<Navbar.Collapse className="justify-content-end">
							<a href="/" className="theme-primary-text fw-bolder text-decoration-none">Login</a>
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
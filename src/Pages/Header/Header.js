import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const { user, name, logOut } = useAuth();
	return (
		<header>
			
			<Navbar bg="light" expand="lg" fixed="top" style={{borderBottom: '2px solid #404db6'}}>
				<Container>
					<Navbar.Brand to="#home"><h4 className="theme-primary-text fw-bolder"><span className="theme-secondary-text">HM-</span>Healthcare</h4></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto fw-bold">

							<Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
							<Nav.Link as={HashLink} to="/home#about">About us</Nav.Link>
							<Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
							<Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
							<Nav.Link className="text-primary" as={HashLink} to="/healthTips">Health Tips</Nav.Link>
							<Nav.Link className="text-primary" as={HashLink} to="/covid">Corona Statistics</Nav.Link>
						</Nav>

						<div className="d-flex justify-content-end">
							{user?.email ?

								<span>
									<Navbar.Text>
										<span className="text-danger fw-bold">Hey:</span> <Link to="/profile" className="mx-2 text-success">{user?.displayName || user?.email}</Link>
										<img style={{width: '30px', borderRadius: '50%'}} className="mx-2" src={user.photoURL} alt="" />
									</Navbar.Text>

									<Link onClick={logOut} className="theme-secondary-text fw-bolder text-decoration-none ml-1" to="/home">LogOut</Link>
								</span>
								:
								<span>
									<Link className="theme-primary-text fw-bolder text-decoration-none" to="/login">Login</Link>

									<Link to="/signup"><button className="theme-secondary-btn mx-5">Sign Up</button></Link>

								</span>}
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>


		</header>
	);
};

export default Header;
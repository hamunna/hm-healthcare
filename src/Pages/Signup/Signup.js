import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Signup.css';

const Signup = () => {
	const { error, signInUsingGoogle, handleSignUp, handleNameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange } = useAuth();

	return (
		<div className="sign-form">
			<div className="signing-overlay d-flex justify-content-center align-items-center">
				<div className="form-box">
					<h2 className="text-uppercase fw-bolder">Sign up</h2>

					{error && <Alert variant="danger">{error}</Alert>}
					<form onSubmit={handleSignUp}>
						<input onBlur={handleNameChange} type="text" placeholder="Your Name" required />
						<input onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
						<div className="d-flex gap-4">
							<input onBlur={handlePasswordChange} type="password" placeholder="Password" required />
							<input onBlur={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" required />
						</div>

						<button className="my-2 theme-primary-btn w-100" type="submit">Create Account</button>

						<p>Already a member? <Link to="/login">Login</Link></p>
					</form>

					<div className="or-sign-with d-flex align-items-center gap-3">or</div>

					<button onClick={signInUsingGoogle} className="my-2 theme-secondary-btn text-uppercase w-100">Sign in with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
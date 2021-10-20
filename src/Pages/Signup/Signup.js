import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";
import './Signup.css';

const Signup = () => {
	const { error, signInUsingGoogle, handleNameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, setIsLoading, setError, password, confirmPassword, email, createNewUser, setUserName, verifyEmail } = useAuth();

	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/home';

	const handleGoogleLogin = () => {
		signInUsingGoogle()
			.then(result => {
				history.push(redirect_uri);
			})
			.finally(() => setIsLoading(false));
	}

	// SignUp Handling
	const handleSignUp = e => {
		e.preventDefault();

		const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (!passwordValidation.test(password)) {
			setError('Password must be 8 character with letter & number combination');
			return;
		} else if (password !== confirmPassword) {
			setError("Password doesn't match!");
			return;
		}
		setIsLoading(false);
		createNewUser(email, password)
		.then(result => {
			const user = result.user;
			history.push(redirect_uri);
			setError('');
			setUserName();
			verifyEmail();
		})
		.catch(error => setError(error.message))
	}



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

						<p>Not a member? <Link to="/login" className="text-decoration-none theme-primary-text fw-bold">Login</Link></p>
					</form>

					<div className="or-sign-with">or</div>

					<button className="google-sign-btn my-2 py-1" onClick={handleGoogleLogin}>
						<img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
						<span className="mx-5 h6 fw-bold">Sign in with google</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
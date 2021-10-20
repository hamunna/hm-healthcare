import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
	const { error, signInUsingGoogle, handleEmailChange, handlePasswordChange, setIsLoading, processLogin, setError, email, password } = useAuth();

	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/home';

	// Google Signin Handle
	const handleGoogleLogin = () => {
		signInUsingGoogle()
			.then(result => {
				history.push(redirect_uri);
			})
			.finally(() => setIsLoading(false))
	}

	// Email & Password Login Handle
	const handleLogin = e => {
		e.preventDefault();
		setIsLoading(false);
		processLogin(email, password)
		.then(result => {
			const user = result.user;
			history.push(redirect_uri);
			setError('');
		})
		.catch(setError("Incorrect Email or Password!"));
	}

return (
	<div className="sign-form">
		<div className="signing-overlay d-flex justify-content-center align-items-center">
			<div className="form-box">
				<h2 className="text-uppercase fw-bolder">Login</h2>

				<form onSubmit={handleLogin}>

					{error && <Alert variant="danger">{error}</Alert>}

					<input onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
					<input onBlur={handlePasswordChange} type="password" placeholder="Password" required />

					<button className="my-2 theme-primary-btn w-100" type="submit">Login</button>

					<p>Not a member? <Link to="/signup" className="text-decoration-none theme-primary-text fw-bold">Sign up</Link></p>
				</form>

				<div className="or-sign-with"> or </div>

				<button className="google-sign-btn my-2 py-1" onClick={handleGoogleLogin}>
					<img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
					<span className="mx-5 h6 fw-bold">Sign in with google</span>
				</button>
			</div>
		</div>
	</div>
);
};

export default Login;
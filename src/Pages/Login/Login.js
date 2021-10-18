import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { error, signInUsingGoogle, handleLogin, handleEmailChange, handlePasswordChange } = useAuth();
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

						<p>Not a member? <Link to="/signup">Sign up</Link></p>
					</form>

					<div className="or-sign-with"> or </div>

					<button onClick={signInUsingGoogle} className="my-2 theme-secondary-btn text-uppercase w-100">Sign in with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
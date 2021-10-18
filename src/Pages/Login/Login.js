import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
	const { error, signInUsingGoogle, handleShignUp, handleEmailChange, handlePasswordChange } = useAuth();
	return (
		<div className="sign-form">
			<div className="signing-overlay d-flex justify-content-center align-items-center">
				<div className="form-box">
					<h2 className="text-uppercase fw-bolder">Login</h2>

					<form onSubmit={handleShignUp}>
						<input onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
						<input onBlur={handlePasswordChange} type="password" placeholder="Password" required />

						<button className="my-2 theme-primary-btn w-100" type="submit">Login</button>

						<p>Not a member? <a href="/signup">Sign up</a></p>
					</form>

					<div className="or-sign-with"> or </div>

					<button onClick={signInUsingGoogle} className="my-2 theme-secondary-btn text-uppercase w-100">Sign in with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
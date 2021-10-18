import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Signup.css';

const Signup = () => {
	const { signInUsingGoogle } = useFirebase();

	return (
		<div className="sign-form">
			<div className="signing-overlay d-flex justify-content-center align-items-center">
				<div className="form-box">
					<h2 className="text-uppercase fw-bolder">Sign up</h2>

					<form>
						<input type="text" placeholder="Your Name" />
						<input type="email" placeholder="Your Email" />
						<div className="d-flex gap-4">
							<input type="password" placeholder="Password" />
							<input type="password" placeholder="Confirm Password" />
						</div>

						<button className="my-2 theme-primary-btn w-100" type="submit">Create Account</button>

						<p>Already a member? <a href="../Login/Login.js">Login</a></p>
					</form>

					<div className="or-sign-with"> or </div>

					<button onClick={signInUsingGoogle} className="my-2 theme-secondary-btn text-uppercase w-100">Sign in with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
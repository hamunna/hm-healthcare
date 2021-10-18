import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Signup.css';

const Signup = () => {
	const { error, signInUsingGoogle, handleShignUp, handleNameChange, handleEmailChange, handlePasswordChange, setConfirmPassword } = useAuth();

	return (
		<div className="sign-form">
			<div className="signing-overlay d-flex justify-content-center align-items-center">
				<div className="form-box">
					<h2 className="text-uppercase fw-bolder">Sign up</h2>

					<form onSubmit={handleShignUp}>
						<input onBlur={handleNameChange} type="text" placeholder="Your Name" required />
						<input onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
						<div className="d-flex gap-4">
							<input onBlur={handlePasswordChange} type="password" placeholder="Password" required />
							<input onBlur={setConfirmPassword} type="password" placeholder="Confirm Password" required />
						</div>

						<h6 className="text-danger">{error}</h6>

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
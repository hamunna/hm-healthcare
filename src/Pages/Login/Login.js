import React from 'react';

const Login = () => {
	return (
		<div className="sign-form">
			<div className="signing-overlay d-flex justify-content-center align-items-center">
				<div className="form-box">
					<h2 className="text-uppercase fw-bolder">Login</h2>

					<form>
						<input type="email" placeholder="Your Email" />
						<input type="password" placeholder="Password" />

						<button className="my-2 theme-primary-btn w-100" type="submit">Create Account</button>

						<p>Not a member? <a href="#">Sign up</a></p>
					</form>

					<div className="or-sign-with"> or </div>

					<button className="my-2 theme-secondary-btn text-uppercase w-100">Login with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
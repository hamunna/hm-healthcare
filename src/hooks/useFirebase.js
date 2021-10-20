import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification, updateProfile, signOut, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// Sign In Using Google Account
	const signInUsingGoogle = () => {
		setIsLoading(true)
		return signInWithPopup(auth, googleProvider)

	}

	// On Auth State Change to Observe user State
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({})
			}
			setIsLoading(false)
		})
		return () => unsubscribed;

	}, []);

	const logOut = () => {
		setIsLoading(true)
		signOut(auth)
			.then(() => { })
			.finally(() => setIsLoading(false))
	}

	//==================
	// Events Handling
	//==================

	// Name Field Handling
	const handleNameChange = e => {
		setName(e.target.value);
	}

	// Email Field Handling
	const handleEmailChange = e => {
		setEmail(e.target.value);
	}

	// Password Field Handling
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	}

	// Confirm Password Field Handling
	const handleConfirmPasswordChange = e => {
		setConfirmPassword(e.target.value);
	}

	//=====================================
	// Email-Password Login & Signup System
	//=====================================

	// Create New User
	const createNewUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// Login Process
	const processLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	// Email Verifying
	const verifyEmail = () => {
		sendEmailVerification(auth.currentUser)
			.then(result => {
				console.log(result)
			})
			.catch(error => setError(error.message))
		// .finally(success = setSuccess('We Sent You an Email Verification'));
	}

	// Set UserName
	const setUserName = () => {
		updateProfile(auth.currentUser, { displayName: name })
			.then(result => { })
			.catch(error => setError(error.message));
	}

	// Password Reset
	const handlePasswordReset = () => {
		sendPasswordResetEmail(auth, email)
			.then(result => {
				if (email !== '') {
					setSuccess('Check Your Email to Reset Password')
					setError('')
				}
			})
			.catch(error => {
				// Handle Errors here.
				const errorCode = error.code;
				if (errorCode === 'auth/missing-email') {
					setError('Please Complete Yor Email Field');
					setSuccess('')
				} else {
					setError("An unknown action or Email doesn't exist!");
					setSuccess('')
					// setError('');
				}
			})
		// .finally(success => setSuccess('Check Your Email to Reset Password'))
	}


	return {
		user,
		email,
		password,
		confirmPassword,
		isLoading,
		error,
		success,
		signInUsingGoogle,
		logOut,
		handleNameChange,
		handleEmailChange,
		handlePasswordChange,
		handleConfirmPasswordChange,
		processLogin,
		setIsLoading,
		setError,
		setSuccess,
		createNewUser,
		setUserName,
		verifyEmail,
		handlePasswordReset

	}
}

export default useFirebase;
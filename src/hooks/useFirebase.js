import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification, updateProfile, signOut } from "firebase/auth";
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
	const [isLoading, setIsLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// Sign In Using Google Acctount
	const signInUsingGoogle = () => {
		setIsLoading(true)
		return signInWithPopup(auth, googleProvider)

	}

	// On Auth State Change to Observe user State
	useEffect(() => {
		const unsubscribeed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({})
			}
		})
		return () => unsubscribeed;

	}, []);

	const logOut = () => {
		setIsLoading(true)
		signOut(auth)
			.then(() => { })
			.finally(() => setIsLoading(false))
	}

	//==================
	// Events Hnadling
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
		createNewUser(email, password);
	}

	// Login Handle
	const handleLogin = e => {
		e.preventDefault();
		setIsLoading(false);
		processLogin(email, password);
	}


	// Create New User
	const createNewUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				setError('');
				setUserName();
				verifyEmail();
			})
			.catch(error => setError(error.message))
	}

	// Login Process
	const processLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				setError('');
			})
			.catch(setError("Incorrect Email or Password!"));
	}

	// Email Veryfing
	const verifyEmail = () => {
		sendEmailVerification(auth.currentUser)
			.then(result => {
				console.log(result)
			})
			.catch(error => setError(error.message));
	}

	// Set UserName
	const setUserName = () => {
		updateProfile(auth.currentUser, { displayName: name })
			.then(result => { })
			.catch(error => setError(error.message));
	}


	return {
		user,
		error,
		isLoading,
		signInUsingGoogle,
		logOut,
		handleSignUp,
		handleNameChange,
		handleEmailChange,
		handlePasswordChange,
		handleConfirmPasswordChange,
		handleLogin,
		setIsLoading

	}
}

export default useFirebase;
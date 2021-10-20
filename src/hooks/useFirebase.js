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
			setIsLoading(false)
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

	// Create New User
	const createNewUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// Login Process
	const processLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
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
		email,
		password,
		confirmPassword,
		isLoading,
		signInUsingGoogle,
		logOut,
		handleNameChange,
		handleEmailChange,
		handlePasswordChange,
		handleConfirmPasswordChange,
		processLogin,
		setIsLoading,
		setError,
		createNewUser,
		setUserName,
		verifyEmail

	}
}

export default useFirebase;
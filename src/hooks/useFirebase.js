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
	const [isLogin, setIsLogin] = useState(false);

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// Sign In Using Google Acctount
	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				setUser(result.user);
				console.log(result.user);
			});
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
		signOut(auth)
			.then(() => { })
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
		console.log(e.target.value);
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
		console.log(name, email, password);

		const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (!passwordValidation.test(password)) {
			setError('Password must be 8 character with letter & number combination');
			return;
		} else if (password !== confirmPassword) {
			setError("Password doesn't match!");
			return;
		}
		createNewUser(email, password);
	}

	// Login Handle
	const handleLogin = e => {
		e.preventDefault();
		processLogin(email, password);
	}


	// Create New User
	const createNewUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
				// setError('');
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
				console.log(user);
				// setError('');
			})
			.catch(error => setError(error.message));
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
		signInUsingGoogle,
		logOut,
		handleSignUp,
		handleNameChange,
		handleEmailChange,
		handlePasswordChange,
		handleConfirmPasswordChange,
		handleLogin
		
	}
}

export default useFirebase;
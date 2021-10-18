import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState({});
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

	const signInUsingPassword = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {

			})
	}
	return {
		user,
		error,
		signInUsingGoogle,
		logOut
	}
}

export default useFirebase;
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
	const [ user, setUser ] = useState({});
	const [ error, setError ] = useState({});
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				setUser(result.user);
				console.log(result.user);
			});
	}
	return {
		user,
		error,
		signInUsingGoogle
	}
}

export default useFirebase;

import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    FacebookAuthProvider
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const logOut = () => {
    signOut(auth);
};

export const logInWithFacebook = async () => {
    try {
        const response = await signInWithPopup(auth, facebookProvider);
    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};
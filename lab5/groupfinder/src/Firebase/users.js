
import { auth } from "./firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        // const user = response.user;
    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const logOut = () => {
    signOut(auth);
};

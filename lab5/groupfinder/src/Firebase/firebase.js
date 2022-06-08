// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAu4BCBEOO0EITWs0y5ph9OEHcqbT15GQI",
    authDomain: "demoproject1-d1c79.firebaseapp.com",
    projectId: "demoproject1-d1c79",
    storageBucket: "demoproject1-d1c79.appspot.com",
    messagingSenderId: "840291062323",
    appId: "1:840291062323:web:3f0b003905f1ecf9988946"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
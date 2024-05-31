// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3qg4XxNGr-zp4LmCPfcqJ45fry3DT6HI",
    authDomain: "fozzy-heros-memory-site.firebaseapp.com",
    projectId: "fozzy-heros-memory-site",
    storageBucket: "fozzy-heros-memory-site.appspot.com",
    messagingSenderId: "491942338408",
    appId: "1:491942338408:web:b802f6f4f9a7d3228e40dd",
    measurementId: "G-0H6NH3RQ8Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the auth and analytics objects for use in other files
export { auth, googleProvider };

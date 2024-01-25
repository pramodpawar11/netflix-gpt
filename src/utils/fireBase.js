// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh0D1pvkPCLtI4X9wMecYo6pTJoLaeXl8",
  authDomain: "netflix-gpt-d5929.firebaseapp.com",
  projectId: "netflix-gpt-d5929",
  storageBucket: "netflix-gpt-d5929.appspot.com",
  messagingSenderId: "426338220805",
  appId: "1:426338220805:web:c263297989c7602c9e156c",
  measurementId: "G-ENNHVVNP09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
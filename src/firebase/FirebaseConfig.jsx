// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from"firebase/firestore";
import {getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC95Cq2FBypOrZUKT1wOkhe5XJ_MVUf4V4",
  authDomain: "myeco-12e0e.firebaseapp.com",
  projectId: "myeco-12e0e",
  storageBucket: "myeco-12e0e.appspot.com",
  messagingSenderId: "480649736347",
  appId: "1:480649736347:web:3257609051b85ba5a1d63e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
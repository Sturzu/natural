// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8TZ2lTKNw3O3oen4h1_qozVa3sLOhyM",
  authDomain: "natural-26491.firebaseapp.com",
  projectId: "natural-26491",
  storageBucket: "natural-26491.appspot.com",
  messagingSenderId: "354919069431",
  appId: "1:354919069431:web:04ba0a5217f9e4fd0945f2",
  measurementId: "G-060JVXYWPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

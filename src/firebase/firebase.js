import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKn7yG_PAYGoQUstXy7XnqNePQrLV-qcg",
  authDomain: "natural-f60fa.firebaseapp.com",
  projectId: "natural-f60fa",
  storageBucket: "natural-f60fa.appspot.com",
  messagingSenderId: "305706730726",
  appId: "1:305706730726:web:25243ac7905f65f1196727",
  measurementId: "G-ZJBSMMYVYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

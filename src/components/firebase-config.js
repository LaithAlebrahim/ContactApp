// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBViGjuXAvlJk4DCCJb-6WaIp9cnykBfKY",
  authDomain: "contacts-f3dfc.firebaseapp.com",
  projectId: "contacts-f3dfc",
  storageBucket: "contacts-f3dfc.appspot.com",
  messagingSenderId: "269905752715",
  appId: "1:269905752715:web:ee9dcd440aff02377f9a8e",
  measurementId: "G-LC1S4GNK7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

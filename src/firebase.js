// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhqQpbSZzDC5amq9HBlBo3v-2FnL5Rpsk",
  authDomain: "porfolio-0041.firebaseapp.com",
  projectId: "porfolio-0041",
  storageBucket: "porfolio-0041.firebasestorage.app",
  messagingSenderId: "367095414960",
  appId: "1:367095414960:web:ff7a7c2fac821bcf50bb75",
  measurementId: "G-MX10L97EP7"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    console.log("Starting Google sign-in...");
    const result = await signInWithPopup(auth, provider);
    console.log("Google sign-in successful:", result.user);
    return result;
  } catch (error) {
    console.error("Google Sign-in error:", error.code, error.message);
    throw error;
  }
};

export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "netflix-2b6fa.firebaseapp.com",
  projectId: "netflix-2b6fa",
  storageBucket: "netflix-2b6fa.appspot.com",
  messagingSenderId: "813422150145",
  appId: "1:813422150145:web:285244164b842f95bd3600",
  measurementId: "G-4F8YS5REKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

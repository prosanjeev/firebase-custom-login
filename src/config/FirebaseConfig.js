// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKxs3NULc355J_BZvqgUoKVgzaA_dv4dw",
  authDomain: "custom-auth-e65b0.firebaseapp.com",
  projectId: "custom-auth-e65b0",
  storageBucket: "custom-auth-e65b0.appspot.com",
  messagingSenderId: "428882153528",
  appId: "1:428882153528:web:bc42d92f153256e10a56cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
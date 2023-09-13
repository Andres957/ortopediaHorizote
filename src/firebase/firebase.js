// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {  getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmsUHd8YikACKlXsCRyCsPQ4MjhKIzDJs",
  authDomain: "react-9122c.firebaseapp.com",
  projectId: "react-9122c",
  storageBucket: "react-9122c.appspot.com",
  messagingSenderId: "389228744175",
  appId: "1:389228744175:web:6d5928e40d99c775937a1a",
  measurementId: "G-R25BC1BZWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db= getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-03.firebaseapp.com",
  projectId: "mern-estate-03",
  storageBucket: "mern-estate-03.firebasestorage.app",
  messagingSenderId: "393191219712",
  appId: "1:393191219712:web:73275d8c9b68c45ab02ee5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
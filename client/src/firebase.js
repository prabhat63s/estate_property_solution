// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-fe60a.firebaseapp.com",
  projectId: "estate-fe60a",
  storageBucket: "estate-fe60a.appspot.com",
  messagingSenderId: "373141057244",
  appId: "1:373141057244:web:7babebc737b5d0a2a74e19",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

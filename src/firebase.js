// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMLEwlKsrINPT8o0rexwAYYWbKyyly3Hs",
  authDomain: "deepfake-b2ad3.firebaseapp.com",
  projectId: "deepfake-b2ad3",
  storageBucket: "deepfake-b2ad3.appspot.com",
  messagingSenderId: "1035305370725",
  appId: "1:1035305370725:web:016887fd9aae45a5ca728c",
  measurementId: "G-YMXHGRMK6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
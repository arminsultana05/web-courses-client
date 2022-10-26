// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6oHs6ah1sRVgdo4ogh-2SOly8wgOWf-g",
    authDomain: "web-courses-project.firebaseapp.com",
    projectId: "web-courses-project",
    storageBucket: "web-courses-project.appspot.com",
    messagingSenderId: "3572819859",
    appId: "1:3572819859:web:f650b0732dfbb072dcaa66"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
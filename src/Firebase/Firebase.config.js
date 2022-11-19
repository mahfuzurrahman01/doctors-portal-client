// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEJdZQFsiurpEvDeDPqqT643tymB8yOqE",
    authDomain: "doctors-portal-71983.firebaseapp.com",
    projectId: "doctors-portal-71983",
    storageBucket: "doctors-portal-71983.appspot.com",
    messagingSenderId: "592647201552",
    appId: "1:592647201552:web:11d8fd0d4d9783c475fb95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyQ9cvhwqezTjEKnqph_dsZ6kcS7SRfgI",
    authDomain: "hardware-store-72cf5.firebaseapp.com",
    projectId: "hardware-store-72cf5",
    storageBucket: "hardware-store-72cf5.appspot.com",
    messagingSenderId: "812807538408",
    appId: "1:812807538408:web:5db30454910a53f697ab5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
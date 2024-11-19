// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvuzSsxFa1HUuLcfQvXjltNjrFwcNhFDM",
  authDomain: "astro-auth-462ad.firebaseapp.com",
  projectId: "astro-auth-462ad",
  storageBucket: "astro-auth-462ad.firebasestorage.app",
  messagingSenderId: "715381126719",
  appId: "1:715381126719:web:22e2a5054acb8e8f30aa8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const firebase = {
    app,
    auth,
    };
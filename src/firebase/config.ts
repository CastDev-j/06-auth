// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkpiRxrUijof6PAigJRM1vjFJJTdEGFEI",
  authDomain: "astro-base.firebaseapp.com",
  projectId: "astro-base",
  storageBucket: "astro-base.firebasestorage.app",
  messagingSenderId: "930569740148",
  appId: "1:930569740148:web:0c1eb67107e27e551f1621",
  measurementId: "G-7DHXHDL4M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);



export const firebase = {
  app,
  auth,
  };
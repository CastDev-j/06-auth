// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_SpC70o-BnMqVh00f_sJC-fnJshdO-mI",
  authDomain: "horarios-267a3.firebaseapp.com",
  projectId: "horarios-267a3",
  storageBucket: "horarios-267a3.firebasestorage.app",
  messagingSenderId: "932463148621",
  appId: "1:932463148621:web:4ac27943cd0bbd1256e604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);



export const firebase = {
  app,
  auth,
  };
import { initializeApp } from 'firebase/app';
import 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const {
  FIREBASE_API_KEY: apiKey,
  FIREBASE_AUTH_DOMAIN: authDomain,
  FIREBASE_PROJECT_ID: projectId,
  FIREBASE_STORAGE_BUCKET: storageBucket,
  FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
  FIREBASE_APP_ID: appId
} = Object.assign(__vite_import_meta_env__, { FIREBASE_API_KEY: "AIzaSyA_SpC70o-BnMqVh00f_sJC-fnJshdO-mI", FIREBASE_AUTH_DOMAIN: "horarios-267a3.firebaseapp.com", FIREBASE_PROJECT_ID: "horarios-267a3", FIREBASE_STORAGE_BUCKET: "horarios-267a3.firebasestorage.app", FIREBASE_MESSAGING_SENDER_ID: "932463148621", FIREBASE_APP_ID: "1:932463148621:web:4ac27943cd0bbd1256e604" });
const firebaseConfig = {
  apiKey: "AIzaSyA_SpC70o-BnMqVh00f_sJC-fnJshdO-mI",
  authDomain: "horarios-267a3.firebaseapp.com",
  projectId: "horarios-267a3",
  storageBucket: "horarios-267a3.firebasestorage.app",
  messagingSenderId: "932463148621",
  appId: "1:932463148621:web:4ac27943cd0bbd1256e604"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebase = {
  auth
};

export { firebase as f };

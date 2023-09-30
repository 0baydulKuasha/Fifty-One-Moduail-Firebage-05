// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhH7jewmImToGrYHMMDFcRRFh1aRc5qQ8",
  authDomain: "fifty-one-module.firebaseapp.com",
  projectId: "fifty-one-module",
  storageBucket: "fifty-one-module.appspot.com",
  messagingSenderId: "425392976420",
  appId: "1:425392976420:web:bf8a47262318c1e2829eb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

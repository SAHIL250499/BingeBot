// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCjgrKxJPmMwUvriTdEBkcnZ82LiDvYws",
  authDomain: "netflixgpt-64ceb.firebaseapp.com",
  projectId: "netflixgpt-64ceb",
  storageBucket: "netflixgpt-64ceb.appspot.com",
  messagingSenderId: "295895274230",
  appId: "1:295895274230:web:85560843d2a2ba603252d7",
  measurementId: "G-MCSM0EMN5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

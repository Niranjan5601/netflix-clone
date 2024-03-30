// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp6MrED33BYbOdadGUnL1nRGtYb9XatGU",
  authDomain: "netflixclone-bf9ff.firebaseapp.com",
  projectId: "netflixclone-bf9ff",
  storageBucket: "netflixclone-bf9ff.appspot.com",
  messagingSenderId: "194370566373",
  appId: "1:194370566373:web:5ebd916e430a536f4a7c0c",
  measurementId: "G-8D1BCV09ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
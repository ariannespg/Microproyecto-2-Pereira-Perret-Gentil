// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXBY7sLNgUk6wCeCZ8m2lMAcxn81TVBg0",
  authDomain: "pixel-alliance-2024.firebaseapp.com",
  projectId: "pixel-alliance-2024",
  storageBucket: "pixel-alliance-2024.appspot.com",
  messagingSenderId: "888516068521",
  appId: "1:888516068521:web:e7eef99f39c381f525d5b8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
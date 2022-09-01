import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEh_-puEeHVKKv9bWSlK_FmbZkspAsO2M",
  authDomain: "pr-71-a29fa.firebaseapp.com",
  projectId: "pr-71-a29fa",
  storageBucket: "pr-71-a29fa.appspot.com",
  messagingSenderId: "220577483385",
  appId: "1:220577483385:web:3313e809c1241b01a722a8"
};

// Initialize Firebase

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

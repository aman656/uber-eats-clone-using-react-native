// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJsJ4QiE3fmHD8w0xm_Ag57x_4W2WuwuQ",
  authDomain: "e-commerce-c2869.firebaseapp.com",
  projectId: "e-commerce-c2869",
  storageBucket: "e-commerce-c2869.appspot.com",
  messagingSenderId: "374795063936",
  appId: "1:374795063936:web:36efddf1d73b0ea5ad0c65",
  measurementId: "G-8PNJTZ5VET",
};

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// export default firebase;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrliL-NfTOYzeogHzVkMWbi6GWuqpWJXk",
  authDomain: "notes-609e8.firebaseapp.com",
  projectId: "notes-609e8",
  storageBucket: "notes-609e8.appspot.com",
  messagingSenderId: "645725389230",
  appId: "1:645725389230:web:ef2746866f5e1b7a0a883f",
  measurementId: "G-2JWBKYGBCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

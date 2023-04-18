// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1JfP-KccyEiEomgwoaxxXytlpBR8wMCw",
  authDomain: "netflix-react-app-2df2a.firebaseapp.com",
  projectId: "netflix-react-app-2df2a",
  storageBucket: "netflix-react-app-2df2a.appspot.com",
  messagingSenderId: "563626291052",
  appId: "1:563626291052:web:0c048cb5a40c5dc67f4d49",
  measurementId: "G-90FH7K7W1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
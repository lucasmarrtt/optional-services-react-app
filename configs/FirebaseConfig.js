import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo0P1UApKPwIBq8HTAt3nNe2mnL_aHV4s",
  authDomain: "lucas-project-16d02.firebaseapp.com",
  projectId: "lucas-project-16d02",
  storageBucket: "lucas-project-16d02.appspot.com",
  messagingSenderId: "382780321106",
  appId: "1:382780321106:web:76c521678666d773c49e8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)

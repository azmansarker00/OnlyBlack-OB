import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJGU5HTyruQVnUoiBa557dkdHPEZIFNcY",
  authDomain: "onlyblack-4a3e9.firebaseapp.com",
  projectId: "onlyblack-4a3e9",
  storageBucket: "onlyblack-4a3e9.firebasestorage.app",
  messagingSenderId: "1005046393164",
  appId: "1:1005046393164:web:9d7ba43a98bf1f54d687e9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB, auth } ;
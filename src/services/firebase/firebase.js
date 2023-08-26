
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXjcONKR70ZwgChoq5XmihlA2EjHKhQSg",
  // apiKey: process.env.REACT_APP_apiKey, 
  authDomain: "my-ecommerce-coder-4cd52.firebaseapp.com",
  // authDomain: process.env.REACT_APP_authDomain, 
  projectId: "my-ecommerce-coder-4cd52",
  // projectId: process.env.REACT_APP_projectId, 
  storageBucket: "my-ecommerce-coder-4cd52.appspot.com",
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  messagingSenderId: "1063204591632",
  // appId: process.env.appId
  appId: "1:1063204591632:web:3586b1673083eb353fd295"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



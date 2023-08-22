
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain ,
//   projectId: process.env.REACT_APP_projectId ,
//   storageBucket: process.env.REACT_APP_storageBucket ,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId ,
//   appId: process.env.REACT_APP_appId 
// };

const firebaseConfig = {
  apiKey: "AIzaSyCXjcONKR70ZwgChoq5XmihlA2EjHKhQSg",
  authDomain: "my-ecommerce-coder-4cd52.firebaseapp.com",
  projectId: "my-ecommerce-coder-4cd52",
  storageBucket: "my-ecommerce-coder-4cd52.appspot.com",
  messagingSenderId: "1063204591632",
  appId: "1:1063204591632:web:3586b1673083eb353fd295"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



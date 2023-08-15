
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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


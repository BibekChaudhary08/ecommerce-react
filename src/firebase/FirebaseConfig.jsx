// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVNzJi0IHqTdGoX8dIwVk82GLqL40nM60",
  authDomain: "ecommerce-react-158d9.firebaseapp.com",
  projectId: "ecommerce-react-158d9",
  storageBucket: "ecommerce-react-158d9.appspot.com",
  messagingSenderId: "572935175529",
  appId: "1:572935175529:web:9d27548d31c958ce5191f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
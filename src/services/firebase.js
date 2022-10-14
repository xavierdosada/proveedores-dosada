// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACd9hSrzXn1N04tEsVl_pobBeq6sXoVYI",
  authDomain: "mayoristock.firebaseapp.com",
  projectId: "mayoristock",
  storageBucket: "mayoristock.appspot.com",
  messagingSenderId: "1003874962543",
  appId: "1:1003874962543:web:afa84a44b4c38d3e5fd19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default app;
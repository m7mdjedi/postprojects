// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDURZ8kyinY6dJLwXysJ81VZKNxNMBhWk8",
  authDomain: "projects-cecb4.firebaseapp.com",
  projectId: "projects-cecb4",
  storageBucket: "projects-cecb4.appspot.com",
  messagingSenderId: "143305591620",
  appId: "1:143305591620:web:7ab6a110bd7d9cd6812511",
  measurementId: "G-NHGNT7E9T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);

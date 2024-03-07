// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "blog-c63af.firebaseapp.com",
  projectId: "blog-c63af",
  storageBucket: "blog-c63af.appspot.com",
  messagingSenderId: "581598642696",
  appId: "1:581598642696:web:eb89258044aaa361cfc7bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

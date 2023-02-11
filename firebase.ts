import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnD5w4LE28D47JYN1faJJNzmRjPaXgU1s",
  authDomain: "chatgpt-messenger-afb1d.firebaseapp.com",
  projectId: "chatgpt-messenger-afb1d",
  storageBucket: "chatgpt-messenger-afb1d.appspot.com",
  messagingSenderId: "490065822820",
  appId: "1:490065822820:web:8b65e65f7b608620d20b71"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
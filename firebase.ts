import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXPfTfAmDVdIh8SaVRSApx3MuB0ZoMQ24",
  authDomain: "chatgpt-messenger-yt-377319.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-377319",
  storageBucket: "chatgpt-messenger-yt-377319.appspot.com",
  messagingSenderId: "133147858050",
  appId: "1:133147858050:web:659b4d118e779b1ff7509b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

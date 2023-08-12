import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAi7hGGWF1H2sTvD74jLkGLTHOmK5TrbyE",
  authDomain: "chat-app-fdd78.firebaseapp.com",
  projectId: "chat-app-fdd78",
  storageBucket: "chat-app-fdd78.appspot.com",
  messagingSenderId: "936639391721",
  appId: "1:936639391721:web:3c995fb39899750a3acd78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

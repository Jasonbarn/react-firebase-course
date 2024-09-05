
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBkgRAmbTiFUCYZkpwd28uv8o8IpmvKkmo",
  authDomain: "fir-course-dbb93.firebaseapp.com",
  projectId: "fir-course-dbb93",
  storageBucket: "fir-course-dbb93.appspot.com",
  messagingSenderId: "1025034012677",
  appId: "1:1025034012677:web:9917f00c56b03e0bb2b46c",
  measurementId: "G-EXSTPT5CZV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app);
export const storage = getStorage(app);

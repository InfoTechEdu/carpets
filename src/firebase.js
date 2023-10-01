// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIhdxKB8oMJ04Mt15k214FVluen3h65a8",
  authDomain: "amour-fleurs-ar.firebaseapp.com",
  projectId: "amour-fleurs-ar",
  storageBucket: "amour-fleurs-ar.appspot.com",
  messagingSenderId: "41480736838",
  appId: "1:41480736838:web:7108ff9f5c50d6c1a9fa47",
  measurementId: "G-74KV1N3HSB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
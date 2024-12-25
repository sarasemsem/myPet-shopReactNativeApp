import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "mobileapp-e914e.firebaseapp.com",
  projectId: "mobileapp-e914e",
  storageBucket: "mobileapp-e914e.firebasestorage.app",
  messagingSenderId: "557038780147",
  appId: "1:557038780147:web:c3cfa64964c71c05b18186",
  measurementId: "G-EVD70CRV7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
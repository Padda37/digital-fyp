import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIza....", // ← Aapka real API key yahan ho
  authDomain: "fyp-digital-portal.firebaseapp.com",
  projectId: "fyp-digital-portal",
  storageBucket: "fyp-digital-portal.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg12345"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firestore Database
const db = getFirestore(app);
export { db };
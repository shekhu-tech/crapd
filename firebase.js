import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmTDmDfFm7ochTgoSBVUutw6bXrcmkSSU",
  authDomain: "portfolio-19b3b.firebaseapp.com",
  projectId: "portfolio-19b3b",
  storageBucket: "portfolio-19b3b.firebasestorage.app",
  messagingSenderId: "664897980826",
  appId: "1:664897980826:web:90a47bfd9e6b308f75d223"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

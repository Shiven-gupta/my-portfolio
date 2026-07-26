// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGQJ0ztsH-Ugz6GxSO0XKpx-34XXf-RWA",
  authDomain: "shiven-portfolio-cms.firebaseapp.com",
  projectId: "shiven-portfolio-cms",
  storageBucket: "shiven-portfolio-cms.firebasestorage.app",
  messagingSenderId: "495465035618",
  appId: "1:495465035618:web:faab851ef1e4c8be34de3b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
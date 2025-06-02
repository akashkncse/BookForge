
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI45UP_wRnCp5zTAAlR_eayUjwMxhPz7Y",
  authDomain: "bookforged.firebaseapp.com",
  projectId: "bookforged",
  storageBucket: "bookforged.firebasestorage.app",
  messagingSenderId: "45610009530",
  appId: "1:45610009530:web:d57dd53590a3795b429383"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
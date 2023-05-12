import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAPFdM96qiIFu8eRSEx3mqLg-vHANYV1nk",
  authDomain: "filmyverse-1f7ce.firebaseapp.com",
  projectId: "filmyverse-1f7ce",
  storageBucket: "filmyverse-1f7ce.appspot.com",
  messagingSenderId: "656914904882",
  appId: "1:656914904882:web:22d63ea70086b571b6092b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
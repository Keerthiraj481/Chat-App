import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANS-ajjPv1flm3FstwVjPf5-e71o-J4Xs",
  authDomain: "chat-52734.firebaseapp.com",
  projectId: "chat-52734",
  storageBucket: "chat-52734.appspot.com",
  messagingSenderId: "1069547606165",
  appId: "1:1069547606165:web:73cad04917da834de40b9c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWyeLs2fRqo_CTS_n8BvK_S5oTlKeNyRM",
  authDomain: "defi-project-38b63.firebaseapp.com",
  projectId: "defi-project-38b63",
  storageBucket: "defi-project-38b63.appspot.com",
  messagingSenderId: "758065858051",
  appId: "1:758065858051:web:1babc4c1178d8fa948f036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
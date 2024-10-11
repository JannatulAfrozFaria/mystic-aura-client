// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFs-nt1Vx2z9r6pFD16vtLNJ72_Mq36Sk",
  authDomain: "mystic-aura-272d4.firebaseapp.com",
  projectId: "mystic-aura-272d4",
  storageBucket: "mystic-aura-272d4.appspot.com",
  messagingSenderId: "675277674395",
  appId: "1:675277674395:web:27f77a78d4411c0142733e",
  measurementId: "G-R634JRPGK6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
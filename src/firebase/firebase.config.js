
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


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
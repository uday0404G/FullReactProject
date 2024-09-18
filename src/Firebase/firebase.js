// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKl1ac2m6hEvLK-qCj4g-bybr_GujrLkk",
  authDomain: "zennioptical-71b5f.firebaseapp.com",
  projectId: "zennioptical-71b5f",
  storageBucket: "zennioptical-71b5f.appspot.com",
  messagingSenderId: "1005384384095",
  appId: "1:1005384384095:web:69b3cb4c4e7bfe6c99e5ea",
  measurementId: "G-9N320M1YML"
};
// const google = new GoogleAuthProvider();
// const auth = getAuth();

// export const Googleauth = () => {
//   signInWithPopup(auth, google)
   
//   }

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore(app)
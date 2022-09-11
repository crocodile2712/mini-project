// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTxPJqWw9uA3F_xAbcEhhcJahy5hV4ut0",
  authDomain: "shop-1b968.firebaseapp.com",
  projectId: "shop-1b968",
  storageBucket: "shop-1b968.appspot.com",
  messagingSenderId: "714811512977",
  appId: "1:714811512977:web:c35215a0056dc3221a8730",
  measurementId: "G-WPG2EVG3GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app
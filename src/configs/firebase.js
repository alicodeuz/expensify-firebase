import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// import { firebaseui } from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyBQaT_CaGb2zM6-OgCxZ-oKdJWERAzOpms",
  authDomain: "expense-client-app.firebaseapp.com",
  projectId: "expense-client-app",
  storageBucket: "expense-client-app.appspot.com",
  messagingSenderId: "882572578347",
  appId: "1:882572578347:web:2a60e4ea5bf94a590f246e",
  measurementId: "G-MJXJX2VC2R"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const auth = new firebaseui.auth.AuthUI(firebase.auth())
const auth = firebase.auth();
export { app as default, db, auth };
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2dHGlx4egTCm48NGxCNZRLDchlUFr8HE",
  authDomain: "hello-app-4b5e4.firebaseapp.com",
  projectId: "hello-app-4b5e4",
  storageBucket: "hello-app-4b5e4.appspot.com",
  messagingSenderId: "953562872541",
  appId: "1:953562872541:web:f3c012f5ca3d7e766b3934",
  measurementId: "G-YR164JPC4H"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { app as default, db };
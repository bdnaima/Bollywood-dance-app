import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAQ4pzhU2vbwoWD1uk3eT9TIe75qNlxFxY",
  authDomain: "dance-app-9c409.firebaseapp.com",
  projectId: "dance-app-9c409",
  storageBucket: "dance-app-9c409.appspot.com",
  messagingSenderId: "524775154487",
  appId: "1:524775154487:web:ac4b45eb8e49d9c21db0b2",
});

export const auth = app.auth();
export const db = app.firestore();
export const FieldValue = firebase.firestore.FieldValue;

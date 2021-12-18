import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9NSnfhgeq7f6paYdLGG2DZLBgSAfDVf0",
  authDomain: "test-app-42514.firebaseapp.com",
  databaseURL: "https://test-app-42514-default-rtdb.firebaseio.com",
  projectId: "test-app-42514",
  storageBucket: "test-app-42514.appspot.com",
  messagingSenderId: "550779367588",
  appId: "1:550779367588:web:6541b96a4c2cd4a5897631",
  measurementId: "",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();
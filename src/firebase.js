import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSrkt3zMyYxsacULiILfp4IC6E66VxwTI",
  authDomain: "mytwitter-d16b8.firebaseapp.com",
  databaseURL: "https://mytwitter-d16b8.firebaseio.com",
  projectId: "mytwitter-d16b8",
  storageBucket: "mytwitter-d16b8.appspot.com",
  messagingSenderId: "901763409757",
  appId: "1:901763409757:web:96b76e063009802301aab4",
  measurementId: "G-GXC0361ZKD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

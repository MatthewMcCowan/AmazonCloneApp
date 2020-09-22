import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBSFGVzUwcyGD5WNIaGt-ppOWhLYvutUNg",
  authDomain: "clone-app-bf2ed.firebaseapp.com",
  databaseURL: "https://clone-app-bf2ed.firebaseio.com",
  projectId: "clone-app-bf2ed",
  storageBucket: "clone-app-bf2ed.appspot.com",
  messagingSenderId: "464875088111",
  appId: "1:464875088111:web:1de1ef158cde3bb845d31a",
  measurementId: "G-3ZMBFH288H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

//This is where we connect firebase authenticity with our app and assign it a variable
const auth = firebase.auth();

export { db, auth};
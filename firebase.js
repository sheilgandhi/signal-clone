import * as firebase from "firebase";
// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5Zw1NOZaqgo2B4iSJP1xWYh7Ovk7Ctls",
    authDomain: "signal-clone-f7aa9.firebaseapp.com",
    projectId: "signal-clone-f7aa9",
    storageBucket: "signal-clone-f7aa9.appspot.com",
    messagingSenderId: "124469164585",
    appId: "1:124469164585:web:bf4af524787814b5b3ba38",
    measurementId: "G-CJWVR13YY6"
  };

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }

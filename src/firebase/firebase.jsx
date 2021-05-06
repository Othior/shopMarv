import firebase from 'firebase'
import 'firebase/firebase-firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBqiw8v4IQMT-fJKvYZ-fdywg6Z44ebWlE",
    authDomain: "shopmarv-c9e82.firebaseapp.com",
    projectId: "shopmarv-c9e82",
    storageBucket: "shopmarv-c9e82.appspot.com",
    messagingSenderId: "368268279579",
    appId: "1:368268279579:web:aa9f6471fca7c05541ddbe"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore()

export { db, fire }
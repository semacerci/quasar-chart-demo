// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRP8siXN9k-gZZNWdIk5j-XuhQoX-AE0",
  authDomain: "chart-a859d.firebaseapp.com",
  projectId: "chart-a859d",
  storageBucket: "chart-a859d.appspot.com",
  messagingSenderId: "544624340469",
  appId: "1:544624340469:web:3d944265e2a35c0cb444bc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const productCollection = db.ref("/data/product");
export default firebase;

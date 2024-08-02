import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import {
   getFirestore,
   collection,
   addDoc,
   getDocs,
   doc,
   updateDoc,
   deleteDoc,
   setDoc,
   getDoc,
 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
 import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 
 const firebaseConfig = {
  apiKey: "AIzaSyCmMiYLqj4SUVWckFhLBZPwnrbmxw-fCLQ",
  authDomain: "smit-batch-11-project.firebaseapp.com",
  projectId: "smit-batch-11-project",
  storageBucket: "smit-batch-11-project.appspot.com",
  messagingSenderId: "1091984870314",
  appId: "1:1091984870314:web:00b669a7ea9e862996b9d3"
};
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);
 // Initialize Auth
 const auth = getAuth();
 
 export {
   app,
   db,
   collection,
   addDoc,
   getDocs,
   doc,
   updateDoc,
   deleteDoc,
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   setDoc,
   getDoc,
 };
 
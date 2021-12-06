import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBJOHitJcxqPgONBrs4_0XP5Zet16rSOnU",
    authDomain: "dreambroker-37ce0.firebaseapp.com",
    projectId: "dreambroker-37ce0",
    storageBucket: "dreambroker-37ce0.appspot.com",
    messagingSenderId: "41518036608",
    appId: "1:41518036608:web:dcb3e65eed4e2a82f8d865",
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = firebaseConfig.firestore();
export { db };
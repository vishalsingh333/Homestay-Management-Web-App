// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref} from 'firebase/storage';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVo3W4LaZEXF1NiKS7AM3_RdYx4LqjV0o",
    authDomain: "homestay-1550d.firebaseapp.com",
    projectId: "homestay-1550d",
    storageBucket: "homestay-1550d.appspot.com",
    messagingSenderId: "1094652621478",
    appId: "1:1094652621478:web:fef5a3a4b0730aef5cba67",
    measurementId: "G-RYLR68SP0H"
  };

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export {
    storage
}

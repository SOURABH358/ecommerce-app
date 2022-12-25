import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAfgixqDBvXT2o926U0ldwNixZBPIGaYkE",
    authDomain: "ecommerce-app-348d9.firebaseapp.com",
    databaseURL: "https://ecommerce-app-348d9-default-rtdb.firebaseio.com",
    projectId: "ecommerce-app-348d9",
    storageBucket: "ecommerce-app-348d9.appspot.com",
    messagingSenderId: "952254408097",
    appId: "1:952254408097:web:283d78db80a84336c257e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
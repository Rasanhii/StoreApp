import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCqB2vDudgH7TnaIfyvvLwztaSbTYKLK_U",
    authDomain: "db-tech-mart.firebaseapp.com",
    projectId: "db-tech-mart",
    storageBucket: "db-tech-mart.appspot.com",
    messagingSenderId: "718027068781",
    appId: "1:718027068781:web:952f3750cdab2518fe3664"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export{app, auth}
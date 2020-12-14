import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbKKC5luRzUxwVjDRTp6kffTzW5reSMjk",
    authDomain: "uiproject-8ca10.firebaseapp.com",
    projectId: "uiproject-8ca10",
    storageBucket: "uiproject-8ca10.appspot.com",
    messagingSenderId: "408626394391",
    appId: "1:408626394391:web:c74c81594780d1eba03352",
    measurementId: "G-RCY3K7NN12"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
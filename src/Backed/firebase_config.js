import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAComr9YYiDewSpKLJarXQC_hOk3M_LSBY",
    authDomain: "shary-dad0a.firebaseapp.com",
    projectId: "shary-dad0a",
    storageBucket: "shary-dad0a.appspot.com",
    messagingSenderId: "1075044892556",
    appId: "1:1075044892556:web:b6694bda49f5e7d6f760a9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var db = firebase.firestore();
  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth, provider};
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtgtWJMhghEUxUU0nWxwgKDInpEb4AhK4",
    authDomain: "kj-list-template.firebaseapp.com",
    databaseURL: "https://kj-list-template.firebaseio.com",
    projectId: "kj-list-template",
    storageBucket: "kj-list-template.appspot.com",
    messagingSenderId: "195379265037",
    appId: "1:195379265037:web:fb173fc8b49ddaae5a9f44"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore()

  export default firebase;
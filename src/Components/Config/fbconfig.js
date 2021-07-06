import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyAi78IrZnTAV525KCqHRvWOVIM0_nN7-NI",
    authDomain: "cit-developers-console.firebaseapp.com",
    projectId: "cit-developers-console",
    storageBucket: "cit-developers-console.appspot.com",
    messagingSenderId: "563235288660",
    appId: "1:563235288660:web:d51f85c906d2e8d3e09fc1"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  export default firebase;

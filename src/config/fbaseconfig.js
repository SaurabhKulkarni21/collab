import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC7vQ4OHwbF7WLqMTo5xqMSZSF10nns5H0",
    authDomain: "collab-cf12c.firebaseapp.com",
    databaseURL: "https://collab-cf12c.firebaseio.com",
    projectId: "collab-cf12c",
    storageBucket: "",
    messagingSenderId: "933984282053"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
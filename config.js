import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC9v3FbOZHn_yq6koqJBscRIX2eiglwVYc",
    authDomain: "book-santa-application-7d39f.firebaseapp.com",
    projectId: "book-santa-application-7d39f",
    storageBucket: "book-santa-application-7d39f.appspot.com",
    messagingSenderId: "394764817322",
    appId: "1:394764817322:web:173f8e7ce2b01c4f1c51d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
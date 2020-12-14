import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAsyQ4_QHhmF46rADG3iQKqpoujUzyzK8E",
    authDomain: "app-clone-de88e.firebaseapp.com",
    projectId: "app-clone-de88e",
    storageBucket: "app-clone-de88e.appspot.com",
    messagingSenderId: "560824803011",
    appId: "1:560824803011:web:dc90a91a8ae62e1ba38c76",
    measurementId: "G-C0TRB9X57D"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};
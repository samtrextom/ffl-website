import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDIOeFGaCN717gt8ycgzcCW85UEaheHIxU",
    authDomain: "third-times-the-charm-ffb.firebaseapp.com",
    databaseURL: "https://third-times-the-charm-ffb.firebaseio.com",
    projectId: "third-times-the-charm-ffb",
    storageBucket: "third-times-the-charm-ffb.appspot.com",
    messagingSenderId: "159074136887",
    appId: "1:159074136887:web:cc3fb4deecee058ddd20b2",
    measurementId: "G-2FXJ6BB1WD"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJ5EtD3O-fD-cWxyy4-U95tak05uWhHKk",
    authDomain: "mysmp-5c477.firebaseapp.com",
    databaseURL: "https://mysmp-5c477.firebaseio.com",
    projectId: "mysmp-5c477",
    storageBucket: "mysmp-5c477.appspot.com",
    messagingSenderId: "131297889429",
    appId: "1:131297889429:web:753813d37a9403fe2c1f9c",
    measurementId: "G-NJC2WBBCP7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
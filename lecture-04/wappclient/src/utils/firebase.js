import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyBeGYAW-7jCVvjJ39eOEJdiM5osc4gP7Kk",
    authDomain: "whatsapp-55a9e.firebaseapp.com",
    projectId: "whatsapp-55a9e",
    storageBucket: "whatsapp-55a9e.appspot.com",
    messagingSenderId: "71118262992",
    appId: "1:71118262992:web:881d2730939129f91684d5"
  };

  firebase.initializeApp(config);


export default firebase;
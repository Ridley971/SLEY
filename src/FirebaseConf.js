import Firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyABS6_4Z3OC6EekA1yY2oLo6sJDo9eIShE",
    authDomain: "sleyapps-eeaaf.firebaseapp.com",
    databaseURL: "https://sleyapps-eeaaf.firebaseio.com",
    projectId: "sleyapps-eeaaf",
    storageBucket: "sleyapps-eeaaf.appspot.com",
    messagingSenderId: "12913524495",
    appId: "1:12913524495:web:1cdfc2c318c589cd3a487a",
    measurementId: "G-LMXZ69NT2Q"
  };

const app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();
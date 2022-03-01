import firebase from "firebase";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBonKzzPNa9VYzaB5NAz4_sbGnPq8w47YI",
    authDomain: "twitter-clone-8b71e.firebaseapp.com",
    projectId: "twitter-clone-8b71e",
    storageBucket: "twitter-clone-8b71e.appspot.com",
    messagingSenderId: "946626232885",
    appId: "1:946626232885:web:bc5447f2b507cae4c6277c",
    measurementId: "G-JEWS65M9SP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
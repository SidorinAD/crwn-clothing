import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const config = {
    
    apiKey: "AIzaSyAGcdXLlY8DbCHzDuZsUt-pKQkkKItvtGk",
    authDomain: "crwn-db-75551.firebaseapp.com",
    databaseURL: "https://crwn-db-75551.firebaseio.com",
    projectId: "crwn-db-75551",
    storageBucket: "crwn-db-75551.appspot.com",
    messagingSenderId: "884321691358",
    appId: "1:884321691358:web:62b5744787d1031ba4444f",
    measurementId: "G-GL86FJEHWG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
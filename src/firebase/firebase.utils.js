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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
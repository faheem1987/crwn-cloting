import Firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCtDWMUQibe2mJqnFveAKHm-9jrqN5fvDI",
  authDomain: "crwn-db-ccc6b.firebaseapp.com",
  databaseURL: "https://crwn-db-ccc6b.firebaseio.com",
  projectId: "crwn-db-ccc6b",
  storageBucket: "crwn-db-ccc6b.appspot.com",
  messagingSenderId: "559859817901",
  appId: "1:559859817901:web:e02001fd3f7a47bc0c9524",
  measurementId: "G-LNSKVPE1EY"
};

Firebase.initializeApp(config);

export const auth = Firebase.auth();

const provider = new Firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ props: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default Firebase;
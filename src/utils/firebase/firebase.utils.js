import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCR5oSYvuw7hupQVNlnXLxKuzq-M8QICFI",
    authDomain: "kings-clothing-db-911d2.firebaseapp.com",
    projectId: "kings-clothing-db-911d2",
    storageBucket: "kings-clothing-db-911d2.appspot.com",
    messagingSenderId: "671546028232",
    appId: "1:671546028232:web:7b1be9a0be6ba1816bf5fd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
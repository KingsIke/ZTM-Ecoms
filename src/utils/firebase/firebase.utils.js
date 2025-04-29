import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'user', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);
    console.log(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo })
        } catch (error) {
            console.log('error.creating the user', error.message)
        }
    }
    return userDocRef

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        console.log("Email or password is missing");
        return
    }
    return await signInWithEmailAndPassword(auth, email, password)
}

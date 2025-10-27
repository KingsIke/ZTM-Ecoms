import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, linkWithCredential, EmailAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCR5oSYvuw7hupQVNlnXLxKuzq-M8QICFI",
    authDomain: "kings-clothing-db-911d2.firebaseapp.com",
    projectId: "kings-clothing-db-911d2",
    storageBucket: "kings-clothing-db-911d2.appspot.com",
    messagingSenderId: "671546028232",
    appId: "1:671546028232:web:7b1be9a0be6ba1816bf5fd"
};

// // Initialize Firebase


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('Batch write completed:', objectsToAdd);
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  try {
    const querySnapshot = await getDocs(q);
    console.log('Raw querySnapshot:', querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); // Debug
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    console.log('Generated categoryMap:', categoryMap); // Debug
    return categoryMap;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {};
  }
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'user', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });
    } catch (error) {
      console.error('Error creating user document:', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    console.log('Email or password is missing');
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const linkEmailAndPasswordToGoogleAccount = async (email, password) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error('No user is currently signed in.');
  }
  const credential = EmailAuthProvider.credential(email, password);
  try {
    const usercred = await linkWithCredential(currentUser, credential);
    console.log('Account linking success:', usercred.user);
    return usercred.user;
  } catch (error) {
    console.error('Account linking error:', error);
    throw error;
  }
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//     prompt: 'select_account'
// })

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


// export const db = getFirestore();
// // Creation of documents in DB 

// export const addCollectionAndDocuments = async(collectionKey, objectsToAdd)=> {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     objectsToAdd.forEach((object) => {
//         const docRef = doc(collectionRef, object.title.toLowerCase());
//         batch.set(docRef, object);
//     })
//     await batch.commit();
//     console.log('done', objectsToAdd )
// }


// export const getCategoriesAndDocuments = async () => {
//     const collectionRef = collection(db, 'categories');
//     const q = query(collectionRef);
//     const querySnapshot = await getDocs(q); // Use getDocs instead of getDoc
//     const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//         const { title, items } = docSnapshot.data();
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {});
//     return categoryMap;
// };


// export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
//     if (!userAuth) return
//     const userDocRef = doc(db, 'user', userAuth.uid)
//     const userSnapshot = await getDoc(userDocRef);
//     console.log(userDocRef)
//     console.log(userSnapshot)
//     console.log(userSnapshot.exists())

//     if (!userSnapshot.exists()) {
//         const { displayName, email } = userAuth;
//         const createdAt = new Date()
//         try {
//             await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo })
//         } catch (error) {
//             console.log('error.creating the user', error.message)
//         }
//     }
//     return userDocRef

// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password) return
//     return await createUserWithEmailAndPassword(auth, email, password)
// }
// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//     if (!email || !password) {
//         console.log("Email or password is missing");
//         return
//     }
//     return await signInWithEmailAndPassword(auth, email, password)
// }
// export const linkEmailAndPasswordToGoogleAccount = async (email, password) => {
//     const currentUser = auth.currentUser;
//     console.log("Current user trying to link:", auth.currentUser);
//     if (!currentUser) {
//         throw new Error("No user is currently signed in.");
//     }

//     const credential = EmailAuthProvider.credential(email, password);

//     try {
//         const usercred = await linkWithCredential(currentUser, credential);
//         console.log("Account linking success", usercred.user);
//         return usercred.user;
//     } catch (error) {
//         console.error("Account linking error", error);
//         throw error;
//     }
// };

// export const signOutUser = async () => {

//     return await signOut(auth)
// }
// export const onAuthStateChangedListener = (callback) => {
//     return onAuthStateChanged(auth, callback); // This should return an unsubscribe function
// };
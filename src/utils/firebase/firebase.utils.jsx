import { initializeApp } from 'firebase/app';

import { getAuth,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
    } from 'firebase/auth';


import { getFirestore,
         doc,
        getDoc,
        setDoc,
        collection,
        writeBatch,
        query,
        getDocs,
    } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBrhoIwbKajOSqURI2kFT4g6OcIgvhY4-k",
    authDomain: "crown-clothing-db-8e9b7.firebaseapp.com",
    projectId: "crown-clothing-db-8e9b7",
    storageBucket: "crown-clothing-db-8e9b7.appspot.com",
    messagingSenderId: "692134102614",
    appId: "1:692134102614:web:28b29cd1f01c94526cddf7"
};

const firebaseapp = initializeApp(firebaseConfig);
console.log(firebaseapp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();


/* We generate database */
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);         

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});     

    return categoryMap;
}


/* ************************************************************************************************************************************************  */

/* User Document  */
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} 
    ) => {
    if(!userAuth) return;

    /* we created user document via firebase  */
    const userDocRef = doc(db, 'users', userAuth.uid);
     
    const userSnapshot = await getDoc(userDocRef);

    /* if it does not exists, then we create a new instance in our database.
        If it does exist, then we just return the document */
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            });

        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
};

/* Sign Up, Email and password: User Auth */
export const createAuthUserWithEmailAndPassword  = async (email, password) => {
    if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

/* Sign in, Email and password  */
export const signInAuthUserWithEmailAndPassword  = async (email, password) => {
    if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

/* User can sign out
 signOutUser is a function that's just returning us back */
export const signOutUser = async () => await signOut(auth);

/* Observer listener  */
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
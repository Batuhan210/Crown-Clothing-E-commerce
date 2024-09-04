import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

/* This user context governs the domain of everything related to users and authentication and storage. */
/* as the actual value you want to access  */
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {

            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);          /* If a use sign out, store the null value, if a user sign in, store the object */
        });
            return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
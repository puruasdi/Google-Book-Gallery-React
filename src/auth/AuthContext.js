import React, { useContext, useState, useEffect } from "react"
import { app } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, getAuth, signOut } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    const auth = getAuth(app);

    function signup(email, password) {
        const resReg = createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                return user
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                return errorMessage
            });
        return resReg
    }

    function login(email, password) {
        const resLogin = signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                return user
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                return errorMessage
            });

        return resLogin
    }

    function logout() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            }
        });

        return unsubscribe
    }, [auth])

    const value = {
        currentUser,
        login,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

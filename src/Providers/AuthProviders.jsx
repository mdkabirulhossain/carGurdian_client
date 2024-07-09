import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const[users, setUsers]= useState(null);
    const[loading, setLoading]=useState(true);

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
            setUsers(user);
            console.log("Current User: ", user);
            setLoading(false);
        })
        return()=>{
            unSubscribe();
        }
    }, [])
    const authInfo={
        users,
        loading,
        createUser,
        signInUser,
        LogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
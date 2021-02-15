import React, {useContext, createContext, useState, useEffect} from 'react'
// import {auth} from '../firebase'
import Cookies from 'js-cookie'

export const setSessionCookie = (session)=>{
    Cookies.remove("user")
    Cookies.set("user", session, {expires:14})
}

export const getSessionCookie = () =>{
    const sessionCookie = Cookies.get("user")

    if(sessionCookie === undefined){
        return {}
    }
    else{
        return JSON.parse(sessionCookie)
    }
}

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState(getSessionCookie())
    // const [loading, setLoading] = useState(true)

    function login(email, password){
        // return auth.signInWithEmailAndPassword(email, password)
        setCurrentUser({email, password})
        setSessionCookie({email, password})
    }

    function logout(){
        // return auth.signOut()
        setCurrentUser(null)
        Cookies.remove("user")
    }

    useEffect(()=>{
        // const unsubscribe = auth.onAuthStateChanged(user =>{
        //     setCurrentUser(user)
        //     setLoading(false)
        // })

        // return unsubscribe
        setCurrentUser(getSessionCookie())
    },[])

    const value = {
        currentUser,
        login,
        logout
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

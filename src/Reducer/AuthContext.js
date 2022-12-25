import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()
export default function AuthContextWrapper({children}){
    const [currentUser, setCurrentUser] = useState({})
    console.log(currentUser)
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
        })
        return ()=>{
            unsub();
        }
    },[])
    return(
        <AuthContext.Provider
        value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}
function GetAuthContext(){
    return useContext(AuthContext)
}
export {AuthContext, GetAuthContext}
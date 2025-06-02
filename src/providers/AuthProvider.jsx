import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../customHooks/useAxiosPublic";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const signInWithGitHub =() =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    useEffect(()=>{
       const unsubscribe  =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                //get token and store client
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo )
            }
            else{
                //TODO: remove token if token stored in client side: local storage, caching, in memory
            }
            
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile,
        signInWithGoogle,signInWithGitHub

    }
    return (
        <AuthContext.Provider value ={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
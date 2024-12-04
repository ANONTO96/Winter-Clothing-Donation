import { createContext, useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    // toast
    const successLogin = () => toast.success(' Successfully logged In');
    const successReg = () => toast.success('Congratulations Successfully Registered Your Account');
    const successLogOut = () => toast.success(' Successfully logged Out');
    const successUpdate = () => toast.success('Profile updated successfully!');
    const errorToastR = () => toast.error("Oops..Already Registered");
    const errorToastL = () => toast.error("Oops..Wrong Password or Email");
    const errorToastU = () => toast.error("Failed to update profile. Please try again.");
    const donationToast = () => toast('Thank you! We will reach your destination soon.', {
        icon: '👏',
      });

    // sign up/register
    const createNewUser =(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in/login
    const userLogIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign out/logout
    const logOut = ()=>{
        successLogOut()
        return signOut(auth);
    }

    // global data
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogIn,
        errorToastR,
        errorToastL,
        donationToast,
        successReg,
        successLogin,
        successUpdate,
        errorToastU,
    };

    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //console.log(user);
    


    //create user
    const registerUser = (userEmail, userPassword)=>{

        return createUserWithEmailAndPassword(auth, userEmail, userPassword);

    }

    //login

    const loginUser = (userEmail, userPassword) =>{

        return signInWithEmailAndPassword(auth, userEmail, userPassword);

    }

    //logout

    const logoutUser = () => {
        setUser(null);
        return signOut(auth);
    }
 
    //observer

    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user);
             
            } 
          });

    },[])



    const userInformation = {
            registerUser,
            loginUser,
            user,
            logoutUser
    }
    

   
    return (
       <AuthContext.Provider value={userInformation} >

        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;





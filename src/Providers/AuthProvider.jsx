/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {


    const registerUser = (userEmail, userPassword)=>{

        return createUserWithEmailAndPassword(auth, userEmail, userPassword);

    }

    const loginUser = (userEmail, userPassword) =>{

        return signInWithEmailAndPassword(auth, userEmail, userPassword);

    }


    const userInformation = {
            registerUser,
            loginUser
    }
    

   
    return (
       <AuthContext.Provider value={userInformation} >

        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;





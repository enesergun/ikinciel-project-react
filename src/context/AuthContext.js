import React, { useState, useContext } from "react";

import axios, { URL } from "../constants/axios";

import  ErrorPopUp  from '../utils/PopUpFunctions/errorPopup'
import  SuccessPopUp  from '../utils/PopUpFunctions/successPopup'

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [userMe, setUserMe] = useState(() => JSON.parse(localStorage.getItem('userMeInformation')))
    
    const [loggenIn, setLoggenIn] = useState(() => sessionStorage.getItem('loggedIn'));
    


    const getMyUserInformation = (userToken) => {
        
        axios
        .get(URL.usersMe, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then((response) => {
            localStorage.setItem('userMeInformation', JSON.stringify(response.data));
            setUserMe(response.data);            
        })

    }

    const register = (user) => {
        /* user'da email ve şifre geliyor */
        axios
        .post(URL.register, {
            username: user.email,
            email: user.email,
            password : user.password
        })
        .then((response) => {            
            document.cookie = `name=${response.data.jwt}`            
            setLoggenIn(true);
            sessionStorage.setItem('loggedIn', true);
            getMyUserInformation(response.data.jwt);            
        })
        .catch((error) => {            
            console.log("An error occured", error.response);
            ErrorPopUp("hata!");
        })
    }

    const login = (user) => {
        axios.post(URL.login, {
            identifier: user.email,
            password: user.password,
        }).then((response) => {                        
            document.cookie = `name=${response.data.jwt}`;
            sessionStorage.setItem('loggedIn', true);        
            setTimeout(() => {
                setLoggenIn(true);
              }, 3000);            
            SuccessPopUp('Giriş Başarılı');
            getMyUserInformation(response.data.jwt);            
        }).catch((error) => {
            console.log("error", error);
            ErrorPopUp("Email veya şifre hatalı!");
        })
    }

    return (
        <AuthContext.Provider
            value={{
                userMe,                        
                loggenIn,
                register,
                login,  
                                          
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export {AuthProvider, AuthContext, useAuth}
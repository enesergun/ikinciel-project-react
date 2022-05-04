import React, { useState, useContext } from "react";

import axios, { URL } from "../constants/axios";

import  ErrorPopUp  from '../utils/PopUpFunctions/errorPopup'
import  SuccessPopUp  from '../utils/PopUpFunctions/successPopup'

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [userMe, setUserMe] = useState(() => JSON.parse(localStorage.getItem('userMeInformation')))
    const [user, setUser] = useState(null);
    const [loggenIn, setLoggenIn] = useState(() => sessionStorage.getItem('loggedIn'));
    const [token] = useState(document.cookie.split("=")[1])
    


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
            console.log("Well done!");
            console.log('User Profile', response.data.user);
            console.log('User token', response.data.jwt);
            document.cookie = `name=${response.data.jwt}`
            setUser(response.data.user);
            setLoggenIn(true);
            sessionStorage.setItem('loggedIn', true);
            getMyUserInformation(response.data.jwt);
            /* localStorage.setItem('userMeInformation', JSON.stringify(response.data.user)); */
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
            console.log("Giriş başarılı");
            console.log("token", response.data.jwt);
            document.cookie = `name=${response.data.jwt}`;
            sessionStorage.setItem('loggedIn', true);
            console.log("login olup", response.data.user)
            setTimeout(() => {
                setLoggenIn(true);
              }, 3000);            
            SuccessPopUp('giriş Başarılı');
            getMyUserInformation(response.data.jwt);
            /* localStorage.setItem('userMeInformation', JSON.stringify(response.data.user)); */
        }).catch((error) => {
            console.log("error", error);
            ErrorPopUp("Email veya şifre hatalı!");
        })
    }

    return (
        <AuthContext.Provider
            value={{
                userMe,
                token,                
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
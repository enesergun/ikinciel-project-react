import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {


    return (
        <AuthContext.Provider
            value={{
                
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export {AuthProvider, AuthContext, useAuth}
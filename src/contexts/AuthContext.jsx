import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}
export const AuthContextProvider = ({ children })=>{
    const navigate = useNavigate()
    // const [authUser, setAuthUser] = useState(JSON.parse(window.localStorage.getItem("user")) || null);
    const setUserAuthInfo = (data) => {
        if(data) {
            console.log("🚀 ~ setUserAuthInfo ~ data:", data)
            window.localStorage.setItem('token',data.token);
            window.localStorage.setItem('user',JSON.stringify(data));
        }
    }

    const logOut = ()=>{
        window.localStorage.removeItem("user")
        window.localStorage.removeItem("token")
        navigate("/login");
    }
    const getUserAuthInfo = () => {
        const userData =  window.localStorage.getItem('user');
        if(userData) {
            return JSON.parse(userData);
        }
    }

    const isAuthenticated = ()=>{
        const isToken = window.localStorage.getItem("token");
        if(isToken) return true
        return false;
    }

    return <AuthContext.Provider value={{setUserAuthInfo, getUserAuthInfo, isAuthenticated, logOut}}> {children} </AuthContext.Provider>
    
} 

// import { createContext, useContext, useState } from 'react';

// export const AuthContext = createContext();

// export const useAuthContext = ()=>{
//     return useContext(AuthContext);
// }
// export const AuthContextProvider = ({ children })=>{
//     const setUserAuthInfo = (data) => {
//         if(data) {
//             window.localStorage.setItem('token',data.token);
//             window.localStorage.setItem('user',JSON.stringify(data));
//         }
//     }

//     const getUserAuthInfo = () => {
//         const userData =  window.localStorage.getItem('user');
//         if(userData) {
//             return JSON.parse(userData);
//         }
//     }

//     return <AuthContext.Provider value={{setUserAuthInfo, getUserAuthInfo}}> {children} </AuthContext.Provider>
    
// } 


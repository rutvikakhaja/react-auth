import api from "../axios";
import { ServerConfig } from "../constants";

const login = async({email,password})=>{
    
    console.log("=======",email,password);
    
    const response = await api.post(`${ServerConfig.url}/auth/login`,{
        email,
        password
    });
    console.log("🚀 ~ auth.js:11 ~ login ~ response:", response)
    return response?.data || response;
}

const signup = async({name,email,password})=>{
    const response = await api.post(`${ServerConfig.url}/auth/signup`,{
        name,
        email,
        password
    });
    return response.data;
}




export default {
    login,
    signup,
}
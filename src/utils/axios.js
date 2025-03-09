import axios from "axios";
// Get token from localStorage
const token = localStorage.getItem("token");

// Set default Authorization header for all requests
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
const api = axios.create({
    headers:{
        "Content-Type": "application/json"
    }
})

// api.interceptors.request.use((config)=>{
//     const token = window && window.localStorage.getItem("token");
//     console.log("🚀 ~ api.interceptors.request.use ~ token:", token)
//     if(token && config) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
// });

// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if(error?.response?.status === 401 && !window.location.href.includes("/login")) {
//             localStorage.removeItem("token");
//             window.location.replace("/login");
//             return Promise.reject(error);
//         }else {
//             return Promise.reject(error);
//         }
//     }
// )
export default api;
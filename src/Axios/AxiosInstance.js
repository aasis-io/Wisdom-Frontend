import axios from "axios";
import { backendBaseUrl } from "./ApiConfig";
 
 
const axiosInstance = axios.create({

    baseURL:backendBaseUrl,
    timeout:10000
})
 

axiosInstance.interceptors.request.use(

    (config)=>{

    const publicEndpoints = ['/login','forget-password','reset-password'];

    const isPublic = publicEndpoints.some((endpoints)=>
    config.url.includes(endpoints));

    if(isPublic){
        return config;
    }
        const token = localStorage.getItem("accessToken");
    
        if(!token){
            // router.push('/login')
            return Promise.reject(new Error("No Token"));
        }

        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },

    (error)=> Promise.reject(error)

)

axiosInstance.interceptors.response.use(

    (response) => response,

    (error) => {

        if(error.response && error.response.status === 401){
            localStorage.removeItem("accessToken");
            // toast.error("Session End! Please Login Again!");
            // router.push("/login");
        }
        return Promise.reject(error)
    }
)

export default axiosInstance;
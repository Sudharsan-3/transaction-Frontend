import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

// import axios from "axios";

// const api = axios.create({
//     baseURL : process.env.NEXT_PUBLIC_API_BASE_URL
// }) 

// api.interceptors.request.use((config)=>{
//     const token = localStorage.getItem("token");
//     if(token){
//         console.log(token)
//         config.headers.Authorization = token
//     }
//     return token
// },
// (error)=>{
//     return Promise.reject(error)

// }
// )

//     api.interceptors.response.use((response)=>response,(error)=>{
//         if(error.response?.status ===401){
//             console.warn("Unautherized. Redirecting to login...");
//             window.location.href="/login"
//         }
//         return Promise.reject(error)
//     });

//     export default  api;

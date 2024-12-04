import axios from "axios";
import GetFromStorage from "@/lib/get_from_storage";

// replace with your api endpoint url
 
const BASEURL = process.env.NEXT_PUBLIC_API_URL;   // http://127.0.0.1:8000/api/

// Creating a base axios instance to use throughout the project
const axiosInstance = axios.create({
    // Base URL means you don't gotta pass the whole url everytime just the endpoint
    baseURL: BASEURL,
    timeout: 20000,
    withCredentials: true,
    headers: {
        // tell it that it's sending over json
        "Content-Type": "application/json",
        // tell the server that it accepts json
        accept: "application/json",
    },
});

// check local storage before every request and attack the access token
// helpfull if you wanna use client side routing right after logging in.
axiosInstance.interceptors.request.use(
    (config) => {
        const token = GetFromStorage("access");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;


// usage
// const someFunction = async () => {
//     const response = await axiosInstance.method('endpoint/smthn')
//     return response?.data
// }

// another way of using it
// const someFunction = async () => {
//     try {
//         const response = await axiosInstance.method('endpoint/smthn')
//         return response?.data
//     } catch (error) {
//         catch error or reject it to catch it at the component level doesn't matter really (tip: use tanstack/query to not worry about this and also not worry about state)
//     }
// }
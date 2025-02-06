import axios from "axios";

// export const API_BASE_URL = "https://webalphatechno.vercel.app/";
export const API_BASE_URL = "http://localhost:5757/";   


const jwt = localStorage.getItem("token")
console.log("first token is : ", jwt);
export const api = axios.create({
    baseURL : API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        'Content-Type': "application/json",
    },
})



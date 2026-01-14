import axios from "axios"

export const  getPost  = async()=>{
    const  response = axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

return  (await response).data
}
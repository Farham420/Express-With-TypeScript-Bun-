import axios from "axios"

export const  getPost  = async()=>{
    const  response = axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

return  (await response).data
}
export const getTodos= async()=>{
    const res = axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
    )
    return (await res).data
}
export const getPosts= async()=>{
    const res = axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
    )
    return (await res).data
}
import {type Request,type Response } from "express";
import {  getPost, getTodos } from "../services/api.services";


export  const homePage = async (req:Request,res:Response)=>{
const posts =await getPost();
res.render("index",{posts});

}
export const TodoPage =  async (req:Request,res:Response)=>{
    const todos = await getTodos();
    res.render("todos",{todos});
}
export const PostPage =  async (req:Request,res:Response)=>{
    const posts = await getPost();
    res.render("posts",{posts});
}

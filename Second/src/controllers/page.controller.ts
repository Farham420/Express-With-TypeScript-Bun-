import {type Request,type Response } from "express";
import { getPost } from "../services/api.services";


export  const homePage = async (req:Request,res:Response)=>{
const posts =await getPost();
res.render("index",{posts});

}
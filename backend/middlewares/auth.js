import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();

export async function auth(req,res,next){
    try{
        const token = req.cookies?.token;
        if(!token){
             return res.json({ success: false, message: " Login for API USE " });
        }
        const SECRET = process.env.SECRET;
        const obj = jwt.verify(token, SECRET);
        const userObj = await User.findById(obj.id).select('-password');
        if(!userObj){
            return res.json({ success: false, message: " Login for API USE " });
        }
        req.user = userObj;
        next();
    }catch(error){
        return res.json({ success: false, message: " Internal server error" });
    }
}
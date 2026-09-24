import jwt from "jsonwebtoken"
import User from "../models/User.js"
import dotenv from "dotenv";

dotenv.config();

export async function getProfile(req,res) {
    try{
        const token = req.cookies?.token

        if(!token){
            return res.json({success : false, message: " Login for API use"})
        }

        let SECRET = process.env.SECRET
        const obj = jwt.verify(token, SECRET)
        console.log("id : ",obj);

        const userObj = await User.findById(obj.id).select('-password')

        if(!userObj){
           return res.json({success : false, message : "Login for API USE"})
        }

        // console.log("cookies : ",cookies)

        return res.json({success: true, message : "profile fetched", user : userObj})
    }catch(error){
       return res.json({success:false, message: "Internal server error : "+error})
    }
}
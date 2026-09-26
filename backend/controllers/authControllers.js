import validator from "validator"
import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export async function signup(req,res){
    try{
        let {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(401).json({success : false, message : "Name, Email and password fields required"});
        }

        name = name.trim()
        email = email.trim(),
        password = password.trim()

        if(!validator.isEmail(email)){
            return res.json({success : false, message : "Enter correct email !"})
        }

        if(password.length < 5){
            return res.json({success:false, message : "Enter a strong password !"})
        }

        let hashedPassword = await bcrypt.hash(password,10)
        let user = new User({
            name,
            email,
            password : hashedPassword
        });
        await user.save()
        res.status(201).json({success : true, message : "signup successfully !"})

    }catch(error){
        return res.status(500).json({success : false, message : error.message})
    }
}

export async function login(req,res) {
    try{
        let {email, password} = req.body

        if(!email || !password){
            res.status(401).json({success : false , message: "email & password field required !"})
        }

        email = email.trim()
        password = password.trim()

        if(!validator.isEmail(email)){
            res.json({success:false, message: "Enter Correct Email !"})
        }
        if(password.length < 5 ){
            return res.json({success:false, message:"Enter strong password !"})
        }

        let foundedUser = await User.findOne({email})
        if(!foundedUser){
            return res.status(404).json({success:false,message: "Invalid credentials !"})
        }

        let isSamePassword = await bcrypt.compare(password,foundedUser.password)

        if(!isSamePassword){
            return res.status(404).json({success:false, message: "Invalid credentials !"})
        }

        // Token create
        let secret = process.env.SECRET
        const token = jwt.sign({id:foundedUser._id},secret)
        res.cookie('token',token,{expires:new Date(Date.now() + 7*24*3600*1000)})

        return res.status(200).json({success:true, message: "Loggin successfully ✅"})

    }catch(error){
        res.status(500).json({success:false, message: error.message})
    }
    
}

export async function logout(req,res) {
    // clear cookie
    res.clearCookie('token')
    return res.status(200).json({success:true, message: "logout successfuly ! ✅"})
}
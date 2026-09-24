import express from "express";
import dotenv from "dotenv";
import User from "./models/User.js";
import authRouter from "./routes/authRoutes.js";
import { ConnectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectionRouter from "./routes/connectionRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));
app.use(express.json());   // convert all json to object.
app.use(cookieParser())

app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/connection",connectionRouter)


app.get("/",(req,res)=>{
    res.send("welcome to our project !")
})

app.get("/allUsers",async function(req,res){
    const users = await User.find({})
    res.json(users)
})


const PORT = process.env.PORT

ConnectDB()
.then(()=>{
    app.listen(PORT,()=>{console.log("Server is running on port : "+PORT)})
    console.log("Database connected successfully !")
}).catch((error)=>{
    console.log("Error in connecting database!")
    console.log(error)
    process.exit(1)
})




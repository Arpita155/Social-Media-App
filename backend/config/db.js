import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function ConnectDB(){
    await mongoose.connect(process.env.DB_URL,{
        dbName: "social_media_practice",
    });
}
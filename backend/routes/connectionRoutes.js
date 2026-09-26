import express from "express"
import { sendConnection } from "../controllers/connectionControllers.js"
import {auth } from "../middlewares/auth.js"

const connectionRouter = express.Router()

connectionRouter.post("/send",auth,sendConnection)

export default connectionRouter 
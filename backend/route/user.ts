import express from "express"

import { Signin,Signup } from "../controllers/userControllers"


export const userRouter = express.Router()

userRouter.post("/signup", Signup)
userRouter.post("/signin", Signin)
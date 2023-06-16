import express from "express"

import { homeSignin,homeSignup } from "../controllers/homeControllers"

export const homeRouter = express.Router()

homeRouter.get("/signin", homeSignin)

homeRouter.get("/signup", homeSignup)

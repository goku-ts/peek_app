import express, { Response, Request } from "express"
import { AuthRequest } from "../middlewares/Authentication"

import { User } from "../model/userModels"

export const authRouter = express.Router()

authRouter.get("/get", async (req: AuthRequest, res: Response) => {
    const userId = (req.user.id)
    const user = await User.findById({ _id: userId })
    if (!user) return res.json({
        message: `user not found`
    })

    res.json({
        message: `Access granted to ${user.name}`
    })
})

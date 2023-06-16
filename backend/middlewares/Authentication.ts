import { Request, Response, NextFunction } from "express"
import JWT from "jsonwebtoken"
require("dotenv").config()


export interface AuthRequest extends Request {
    user?: any
}

export const Auth = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("token")

    if (token) {
        if (process.env.APP_KEY) {
            try {
                const verified = JWT.verify(token, process.env.APP_KEY)
                if (verified) {
                    req.user = verified
                }
            } catch (error:any) {
                return res.json({
                    message: error.message
                })
            }


            next()
        }

    }
    else return res.json({
        message: "no token provided"
    })


}
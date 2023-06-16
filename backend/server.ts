import express from "express"

import { db } from "./db/dbConnection"
import cors from "cors"

import { userRouter} from "./route/user"
import { authRouter } from "./route/auth"
import { homeRouter } from "./route/home"
import { noteRoute } from "./route/noteRoutes"
import { Auth } from "./middlewares/Authentication"

const app = express()



app.use(express.json())
app.use(cors())
app.use("/", homeRouter)
app.use("/user", userRouter)
app.use("/auth", Auth, authRouter)
app.use("/note", Auth, noteRoute)



app.listen(3000, () => db)
import mongoose from "mongoose";

import { UserTypes } from "../types/userTypes";
import { noteType } from "../types/noteTypes";

const userSchema = new mongoose.Schema<UserTypes>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    notes : {
        type : [],
        default : []
    }
},
    {
        timestamps: true
    })


   export const User = mongoose.model<UserTypes>("User", userSchema)
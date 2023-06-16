import mongoose from "mongoose";

import { User } from "./userModels";
import { noteType } from "../types/noteTypes"

const noteSchema = new mongoose.Schema<noteType>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    isPrivate: {
        type: Boolean,
        default: true
    }
    
},
{
    timestamps: true
})

export const Note = mongoose.model<noteType>("Note", noteSchema)
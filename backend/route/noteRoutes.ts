import express from "express"

import { createNote,allNotes,deleteNote,readNote,updateNote } from "../controllers/noteControllers"

export const noteRoute = express.Router()

noteRoute.post("/create", createNote)
noteRoute.get("/read/:id", readNote)
noteRoute.get("/all", allNotes)
noteRoute.post("/update/:id", updateNote)
noteRoute.delete("/delete/:id", deleteNote)


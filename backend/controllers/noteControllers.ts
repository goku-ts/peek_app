import { Request, Response, json, response } from "express"
import { AuthRequest } from "../middlewares/Authentication"

import { Note } from "../model/noteModel"
import { User } from "../model/userModels"


export const createNote = async (req: AuthRequest, res: Response) => {
    const userId = req?.user?.id
    const {  ...rest } = req?.body
    const user = await User.findById({ _id: userId })
    const note = new Note({
        creator: user?.name,
        ...rest
    })

    user?.notes?.push(note)

    console.log(note.isPrivate)

    await user?.save()

    res.json({
        message: "note saved in private",
        notes: user?.notes
    })
}
export const updateNote = async (req: AuthRequest, res: Response) => {

    try {

        const userId = req?.user?.id
        const { title, description, content, isPrivate} = req?.body
        const noteId: any = req.params.id

        const user = await User.findById({ _id: userId })

        const note = user?.notes?.find((n) => n._id.toString() === noteId)
        
        const noteIndex = user?.notes?.findIndex((n) => n._id.toString() === noteId)

        if (!note || noteIndex === -1) return res.json({
            message: "note not found"
        })



        const update = {
            title,
            description,
            content,
            creator : note?.creator,
            likes : note?.likes,
            isPrivate,
            _id: note?._id,
        
       }

        if (noteIndex != undefined && user?.notes != undefined) {
            user.notes[noteIndex] = update
        }


        const saved_user = await user?.save()


        return res.json({
            message: "note updated sucessfuly",
            saved: saved_user?.notes
        })

    } catch (error) {
        console.log(error)
    }

}
export const deleteNote = async (req: AuthRequest, res: Response) => {
    const userId = req?.user?.id
    const noteId: any = req.params.id

    const user = await User.findById({ _id: userId })

    const note = user?.notes?.filter((n) => n._id.toString() === noteId)

    if (!note || note.length == 0) return res.json({
        message: "note not found"
    })

    note.forEach((n) => {
        let noteIndex = user?.notes?.indexOf(n)

        if (noteIndex != undefined) {
            const removedNote = user?.notes?.splice(noteIndex, 1)
            return res.json({
                message: "note removed",
                note: removedNote
            })
        }
    })
    await user?.save()
}


export const readNote = async (req: AuthRequest, res: Response) => {
    const userId = req?.user?.id
    const noteId: any = req.params.id

    const user = await User.findById({ _id: userId })

    const note = user?.notes?.filter((n) => n._id.toString() === noteId)

    if (!note || note.length == 0) return res.json({
        message: "note not found"
    })

    note.forEach((n) => {
        return res.json({
            message: "note gotten",
            note: n
        })
    })

}


export const allNotes = async (req: AuthRequest, res: Response) => {
    const userId = req?.user?.id
    const user = await User.findById({ _id: userId })

    const notes = user?.notes

    if (!notes || notes.length < 1) return res.json({
        message: "no notes available"
    })

    res.json({
        messsage: " all notes",
        "all notes": user
    })
}
import mongoose from "mongoose"

const uri = "mongodb+srv://elivation17:unashamed@cluster0.znimxog.mongodb.net/?retryWrites=true&w=majority"
const options = { useNewUrlParser: true, useUnifiedTopology: true };
export const db = mongoose.connect(uri)
    .then(() => console.log("connected to database"))
    .catch((e) => console.log(e))
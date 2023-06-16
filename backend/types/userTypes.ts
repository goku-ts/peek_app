import { noteType } from "./noteTypes"
export type UserTypes ={
  name?: string
  email : string
  password : string,
  notes? : noteType[]
}
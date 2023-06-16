import Joi from  "joi"

import { UserTypes } from "../types/userTypes"
import { noteType } from "../types/noteTypes"

export const validateSignup=(body:UserTypes)=>{
    const validationschema = Joi.object<UserTypes>({
      name : Joi.string().required().min(5).max(30),
      email : Joi.string().email().required().min(5).max(30),
      password : Joi.string().required().min(8).max(25).pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    })

    return validationschema.validate(body)
}

export const validateSigin=(body:UserTypes)=>{
    const validationschema = Joi.object<UserTypes>({
      email : Joi.string().email().required().min(5).max(30),
      password: Joi.string()
    })

    return validationschema.validate(body)
}

export const validateNote=(body:noteType)=>{
  const validationschema = Joi.object<noteType>({
    title : Joi.string().required().min(5).max(50),
    description : Joi.string().required().min(20).max(100),
    content : Joi.string().required().min(20).max(1000),
  })

  return validationschema.validate(body)
}


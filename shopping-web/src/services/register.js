import { publicRequest } from "../httpResquest/axios"

export const registerService = (data) =>{
    return publicRequest.post("auth/register",data)
}
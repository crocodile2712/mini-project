import { publicRequest } from "../httpResquest/axios";

export const loginService = (data) =>{
    return publicRequest.post('auth/login',data)
}
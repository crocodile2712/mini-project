import { userRequest } from "../httpResquest/axios"

export const paymentService = (data) =>{
    return userRequest.post("checkout/payment",data)
}
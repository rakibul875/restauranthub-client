import { handlePost } from "../action/serverPost"

export const postOrder=async(orderData:any):Promise<any>=>{
    return handlePost('/order',orderData)
}
import { handlePost } from "../action/serverPost"

export const postOrder=async(orderData:any):Promise<any>=>{
    return handlePost('/order',orderData)
}
export const updateOrder=async(id:any,status:any):Promise<any>=>{
    return handlePost(`/orders/${id}`,{status},"PATCH")
}
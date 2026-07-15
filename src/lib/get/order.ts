import { handleGetSection } from "../action/serverGet"

export const getOrder=async(userId:string):Promise<any>=>{
    return handleGetSection(`/my-order?userId=${userId}`)
}
export const getAllOrder=async():Promise<any>=>{
    return handleGetSection(`/orders`)
}
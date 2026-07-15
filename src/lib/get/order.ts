import { handleGetSection } from "../action/serverGet"

export const getOrder=async(userId:string):Promise<any>=>{
    return handleGetSection(`/my-order?userId=${userId}`)
}
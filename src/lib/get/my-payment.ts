import { handleGetSection } from "../action/serverGet"

export const getPayment=(userId:any):Promise<any>=>{
 return handleGetSection(`/my-payment?userId=${userId}`)
}
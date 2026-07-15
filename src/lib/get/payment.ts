import { handleGetSection } from "../action/serverGet"

export const getAllPayments=async():Promise<any>=>{
 return handleGetSection('/payment')
}
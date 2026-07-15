import { handleGetSection } from "../action/serverGet"

export const getUser=async():Promise<any>=>{
 return await handleGetSection('/users')
}
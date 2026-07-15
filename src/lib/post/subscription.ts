import { handlePost } from "../action/serverPost"

export const postSubscription= async(subscriptionData:any):Promise<any>=>{
    return handlePost('/subscription',subscriptionData)
}
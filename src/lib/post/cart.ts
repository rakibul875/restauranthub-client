import { handlePost } from "../action/serverPost";

export const handleCartPost = async (cartData: any): Promise<any> => {
  return handlePost("/cart", cartData);
};

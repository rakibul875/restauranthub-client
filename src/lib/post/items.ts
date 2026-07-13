import { handlePost } from "../action/serverPost";

export const handleItemPost = async (newItem: any): Promise<any> => {
  return handlePost("/items", newItem);
};

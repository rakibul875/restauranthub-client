import { handleGetSection } from "../action/serverGet";

export const getMyCart = async (userId: string) => {
  return handleGetSection(`/my-cart?userId=${userId}`);
};

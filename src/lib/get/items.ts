import { handleGetSection } from "../action/serverGet";
export const getAllItems = async (search: string = "", category: string = "All"): Promise<any> => {

  const queryPath = `/items?search=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}`;
  
  return handleGetSection(queryPath);
};
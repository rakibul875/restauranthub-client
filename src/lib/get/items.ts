import { handleGetSection } from "../action/serverGet";
export const getAllItems = async (search: string = "", category: string = "All"): Promise<any> => {

  const queryPath = `/items?search=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}`;
  
  return handleGetSection(queryPath);
};

export const getItemById = async (id: string): Promise<any> => {
  const queryPath = `/items/${encodeURIComponent(id)}`;
  return handleGetSection(queryPath);
};

export const getLatestItem=async():Promise<any>=>{
  return handleGetSection('/latest-items')
}
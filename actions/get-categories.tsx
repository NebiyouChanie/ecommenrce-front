import axiosInstance from "@/lib/axios_instance";
import { Category } from "@/types";

 
const getCategories = async (): Promise<Category[]> => {
 
      
    const response = await axiosInstance.get('/categories')
    return response?.data

};

export default getCategories;

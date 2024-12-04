import { Category } from "@/types";

const URL =  'http://localhost:3002/api/7213d03c-6625-4b3e-ad75-599a8285f891/categories'

 const getProducts = async ():Promise<Category[]> => {
    const res = await fetch(URL)
    return   res.json();
}

export default getProducts
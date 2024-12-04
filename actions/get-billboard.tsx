// import { Billboard } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

// const getBillboard = async (id: string): Promise<Billboard> => {
//     try {
//         const res = await fetch(`${URL}/${id}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!res.ok) {
//             throw new Error(`Failed to fetch billboard: ${res.statusText} (Status: ${res.status})`);
//         }

//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching billboard:", error);
//      }
// };

// export default getBillboard;

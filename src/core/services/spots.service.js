import { Request } from '../request/Request';

export const getQRCode = () => {
    
    let path = { url: "/api/spot/", method: "GET" }


    try {
        // "data" a mettre a "null" si la method est GET ou DELETE
        return Request( path, null ).then(async (response) => {
             return response.data;
        });
    } catch(e) {
        console.log(e);
    }
}
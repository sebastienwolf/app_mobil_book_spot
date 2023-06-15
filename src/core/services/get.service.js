import { Request } from '../request/Request';

export const getService = (data) => {
    
    let path = { url: data, method: "GET" }
    
    try {
        // "data" a mettre a "null" si la method est GET ou DELETE
        return Request( path, null ).then(async (response) => {
             return response.data;
        });
    } catch(e) {
        console.log(e);
    }
}
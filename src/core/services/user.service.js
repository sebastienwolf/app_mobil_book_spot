import { Request } from '../request/Request';

export const getQRCodeUser = (data) => {
    console.log('service = ',data)
    
    let path = { url: data, method: "GET" }
    console.log('service = ',path)
    try {
        // "data" a mettre a "null" si la method est GET ou DELETE
        return Request( path, null ).then(async (response) => {
             return response.data;
        });
    } catch(e) {
        console.log(e);
    }
}
import axios from "axios";

export const Request = async (path, data ) => {
    const options = {
        baseURL: "https://2973-2a01-cb1c-1326-1300-c4d6-e4dc-fbe2-ce74.ngrok-free.app",
        url: path.url,
        method: path.method,
        headers: { 'Content-Type': 'application/json' },
         ...(data === null ? {} : { data: data })
    };

    return axios(options)
    .then(response => response )
    
    .catch(async function (error) {
       return Promise.reject({ "message": "Une erreur est survenue", "code": 500 });
    });
};
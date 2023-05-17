import axios from "axios";

export const Request = async (path, data ) => {
    const options = {
        baseURL: "https://b2eb-2a01-cb1c-1326-1300-743b-ed4f-b2f4-6067.ngrok-free.app",
        url: path.url,
        method: path.method,
        headers: { 'Content-Type': 'application/json' },
         ...(data === null ? {} : { data: data })
    };

    return axios(options)
    .then(response => response)
    .catch(async function (error) {
       return Promise.reject({ "message": "Une erreur est survenue", "code": 500 });
    });
};
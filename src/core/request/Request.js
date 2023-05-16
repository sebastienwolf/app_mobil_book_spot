import axios from "axios";

export const Request = async (path, data ) => {
    const options = {
        baseURL: "https://625a-2a01-cb1c-1326-1300-fb5f-e56f-8569-a9c2.ngrok-free.app",
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
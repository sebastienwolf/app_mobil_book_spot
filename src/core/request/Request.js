import axios from "axios";

export const Request = async (path, data) => {
  const options = {
    baseURL: "https://a6b5-54-36-208-7.ngrok-free.app",
    url: path.url,
    method: path.method,
    headers: { "Content-Type": "application/json" },
    ...(data === null ? {} : { data: data }),
  };

  return axios(options)
    .then((response) => {
      return response;
    })

    .catch(async function (error) {
      return Promise.reject({ message: "Une erreur est survenue", code: 500 });
    });
};

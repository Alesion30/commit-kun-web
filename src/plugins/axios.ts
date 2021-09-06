import axiosBase from "axios";

const axios = (token?: string) => {
  const customAxios = axiosBase.create({
    // baseURL: "http://localhost:8880",
    baseURL: "https://commit-kun.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Bearer ${token}`,
    },
    responseType: "json",
  });

  customAxios.interceptors.request.use((request) => {
    console.log("Starting Request: ", request);
    return request;
  });

  customAxios.interceptors.response.use((response) => {
    console.log("Response: ", response);
    return response;
  });

  return customAxios;
};

export default axios;

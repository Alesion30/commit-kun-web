import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: "http://localhost:8880",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  responseType: "json",
});

export default axios;

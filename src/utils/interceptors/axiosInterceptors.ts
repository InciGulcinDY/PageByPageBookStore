import axios from "axios";
import toastr from "toastr";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = "My Token";
  return config;
});
axiosInstance.interceptors.response.use(
  (value) => {
    console.log("Response has been taken successfully!");
    return value;
  },
  (error) => {
    console.log(error.response.data.message);
    toastr.error(error.response.data.message);
    return error;
  }
);

export default axiosInstance;

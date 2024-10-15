import axios from "axios";

const UseAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "https://good-bite-server.vercel.app",
  });
  return axiosInstance;
};

export default UseAxios;

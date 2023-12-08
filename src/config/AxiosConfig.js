import axios from "axios";
import { API } from "../helpers/constants";

export const configuratedAxios = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

// configuratedAxios.interceptors.request.use((request) => {
//   request.headers = {
//     "Content-Type": "application/formdata",
//   };
//   return request;
// });

// const confAxios = () => {

//   return configuratedAxios;
// };

// export default confAxios();

import axios from "axios";
import { API } from "../helpers/constants";

const confAxios = () => {
  const configuratedAxios = axios.create({
    baseURL: API,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return configuratedAxios;
};

export default confAxios();

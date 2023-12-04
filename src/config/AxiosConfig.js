import axios from "axios";

const confAxios = () => {
  //   const Authorization = tokens ? `Bearer ${tokens.access}` : null;

  const configuratedAxios = axios.create({
    baseURL: API,
    // timeout: 8000,
    // headers: { Authorization },
  });

  return configuratedAxios;
};

export default confAxios();

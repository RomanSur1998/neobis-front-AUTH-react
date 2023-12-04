import confAxios from "../config/AxiosConfig";

export const api = {
  registration: async function (data) {
    try {
      const response = await confAxios.post(data);
      return response;
    } catch (error) {
      console.log("Error registration", error);
    }
  },
  autorisation: async function (data) {
    try {
      const response = await confAxios.post(data);
      return response;
    } catch (error) {
      console.log("Error autorization", error);
    }
  },
};

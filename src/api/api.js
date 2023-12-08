import { configuratedAxios } from "../config/AxiosConfig";

export const api = {
  registration: async function (data, navigate) {
    try {
      const response = await configuratedAxios.post("register/", data);
      navigate("/welcome");
      return response;
    } catch (error) {
      console.log("Error registration", error);
    }
  },
  autorisation: async function (data, navigate, notify) {
    try {
      const response = await configuratedAxios.post("login", data);
      navigate("/out");
      return response;
    } catch (error) {
      notify();
      console.log("Error autorization", error);
    }
  },
  confirmRegistr: async function (data, navigate) {
    const code = {
      code: data,
    };
    try {
      const response = await configuratedAxios.post(
        `confirm-email/${data}/`,
        JSON.stringify(code, null, 2)
      );
      navigate("/auth");
      return response;
    } catch (error) {
      console.log("confirm Errors ", error);
      throw error;
    }
  },
  logOutUser: async function (data, navigate) {
    try {
      const response = await configuratedAxios.post();
    } catch (error) {
      console.log("logOut error", error);
    }
  },
};

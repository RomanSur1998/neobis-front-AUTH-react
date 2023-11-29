import * as yup from "yup";
export const validationSchema = yup.object({
  login: yup.string().required("Введите логин"),
  password: yup.string().required("Введите пароль"),
});

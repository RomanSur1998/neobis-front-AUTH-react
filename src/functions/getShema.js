import * as yup from "yup";
export const validationSchema = yup.object({
  email: yup.string().email("Поправте email").required("Обязательное поле"),
  login: yup.string().required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "От 8 до 15 символов")
    .max(15)
    .matches(/[a-zA-Z]/, "Строчные и прописные буквы")
    .matches(/\d/, "Минимум 1 цифра")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Минимум 1 спецсимвол"),

  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательное поле для подтверждения пароля"),
});

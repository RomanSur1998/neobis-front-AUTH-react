import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

const AuthForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      login: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      dispatch(setUser(values));
    },
    validationSchema: yup.object({
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
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Введите адрес почты"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </label>
        <label>
          <input
            type="text"
            placeholder="Придумай логин"
            id="login"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.errors.login && formik.touched.login ? (
          <div>{formik.errors.login}</div>
        ) : null}
        <label>
          <input
            type="text"
            placeholder="Создай пароль"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <ul>
          <li
            className={
              formik.errors.password === "От 8 до 15 символов" &&
              formik.touched.password
                ? "red"
                : "green"
            }
          >
            От 8 до 15 символов
          </li>
          <li
            className={
              formik.errors.password === "Строчные и прописные буквы" &&
              formik.touched.password
                ? "red"
                : "green"
            }
          >
            Строчные и прописные буквы
          </li>
          <li
            className={
              formik.errors.password === "Минимум 1 цифра" &&
              formik.touched.password
                ? "red"
                : "green"
            }
          >
            Минимум 1 цифра
          </li>
          <li
            className={
              formik.errors.password === "Минимум 1 спецсимвол" &&
              formik.touched.password
                ? "red"
                : "green"
            }
          >
            Минимум 1 спецсимвол (!, ", #, $...)
          </li>
        </ul>
        <label>
          <input
            type="text"
            id="confirm"
            name="confirm"
            placeholder="Повтори пароль"
            value={formik.values.confirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        {formik.errors.confirm && formik.touched.confirm ? (
          <div>{formik.errors.confirm}</div>
        ) : null}
        <button type="submit">Далее</button>
      </form>
    </>
  );
};

export default AuthForm;

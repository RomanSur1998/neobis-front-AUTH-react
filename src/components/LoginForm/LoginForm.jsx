import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("submit", JSON.stringify(values, null, 2));
    },
    validationSchema: yup.object({
      login: yup.string().required("Введите логин"),
      password: yup.string().required("Введите пароль"),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="login"
          name="login"
          placeholder="Введите адрес почты"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.login && formik.touched.login ? (
          <div>{formik.errors.login}</div>
        ) : null}
        <input
          type="text"
          placeholder="Создай пароль"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit">Войти</button>
        <Link to="/">У меня еще нет аккаунта</Link>
      </form>
    </>
  );
};

export default LoginForm;

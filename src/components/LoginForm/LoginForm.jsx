import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import show from "../../assets/IconPasswordShow.svg";
import unShow from "../../assets/IconPasswordUnShow.svg";

function LoginForm() {
  const [isShow, setIsShow] = useState(false);
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

  function hahleShowPassword() {
    setIsShow(!isShow);
  }
  return (
    <>
      <form className="d_flex column gap-4" onSubmit={formik.handleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            id="login"
            name="login"
            placeholder="Введите адрес почты"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.login && formik.touched.login ? (
            <div className="red">{formik.errors.login}</div>
          ) : null}
        </label>
        <label>
          <input
            className="input"
            type={isShow ? "text" : "password"}
            // type="text"
            placeholder="Создай пароль"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <img
            className="img_hide"
            onClick={hahleShowPassword}
            src={isShow ? show : unShow}
            alt=""
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="red">{formik.errors.password}</div>
          ) : null}
        </label>

        <button className="button  black" type="submit">
          Войти
        </button>
        <Link to="/">У меня еще нет аккаунта</Link>
      </form>
    </>
  );
}

export default LoginForm;

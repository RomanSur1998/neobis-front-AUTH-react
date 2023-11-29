import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import show from "../../assets/IconPasswordShow.svg";
import unShow from "../../assets/IconPasswordUnShow.svg";
import Field from "../Fields/Field";
import { validationSchema } from "../../functions/getShemaLogin";

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
    validationSchema,
  });

  function hahleShowPassword() {
    setIsShow(!isShow);
  }
  return (
    <>
      <form className="d_flex column gap-4" onSubmit={formik.handleSubmit}>
        <label>
          <Field
            classblock={"input"}
            type={"text"}
            name={"login"}
            formik={formik}
            placeholder={"Введите адрес почты"}
          />
          {formik.errors.login && formik.touched.login ? (
            <div className="red">{formik.errors.login}</div>
          ) : null}
        </label>
        <label>
          <Field
            classblock={"input"}
            type={isShow ? "text" : "password"}
            name={"password"}
            formik={formik}
            placeholder={"Введите пароль"}
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

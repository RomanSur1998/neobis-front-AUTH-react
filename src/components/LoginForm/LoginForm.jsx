import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import show from "../../assets/IconPasswordShow.svg";
import unShow from "../../assets/IconPasswordUnShow.svg";
import Field from "../Fields/Field";
import { validationSchema } from "../../functions/getShemaLogin";
import { api } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/slices/UserSlice";

function LoginForm({ notify }) {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  function handleLogin() {
    api.autorisation(JSON.stringify(user, null, 2), navigate, notify);
  }
  // console.log(user);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("submit", JSON.stringify(values, null, 2));
      dispatch(setLogin(values));
      handleLogin();
    },
    validationSchema,
  });

  function hahleShowPassword() {
    setIsShow(!isShow);
  }

  return (
    <>
      <form
        className="d_flex column gap-4 align_c "
        onSubmit={formik.handleSubmit}
      >
        <label>
          <Field
            classblock={"input"}
            type={"text"}
            name={"username"}
            formik={formik}
            placeholder={"Введите адрес почты"}
          />
          {formik.errors.username && formik.touched.username ? (
            <div className="red">{formik.errors.username}</div>
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

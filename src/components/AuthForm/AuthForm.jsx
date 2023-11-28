import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import show from "../../assets/IconPasswordShow.svg";
import unShow from "../../assets/IconPasswordUnShow.svg";
import { getClassName } from "../../functions/getClassName";
import { validationSchema } from "../../functions/getShema";

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    validationSchema,
  });
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const hendleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <form className="d_flex column gap-4 " onSubmit={formik.handleSubmit}>
        <label className="">
          <input
            className="input"
            type="text"
            id="email"
            name="email"
            placeholder="Введите адрес почты"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="red">{formik.errors.email}</div>
          ) : null}
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder="Придумай логин"
            id="login"
            name="login"
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
            className={
              formik.errors.password && formik.touched.password
                ? "input red"
                : "input green"
            }
            type={showPassword ? "text" : "password"}
            placeholder="Создай пароль"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <img
            className="img_hide"
            onClick={handleShowPassword}
            src={showPassword ? show : unShow}
            alt=""
          />
        </label>

        <ul>
          <li className={getClassName(formik, "От 8 до 15 символов")}>
            От 8 до 15 символов
          </li>
          <li className={getClassName(formik, "Строчные и прописные буквы")}>
            Строчные и прописные буквы
          </li>
          <li className={getClassName(formik, "Минимум 1 цифра")}>
            Минимум 1 цифра
          </li>
          <li className={getClassName(formik, "Минимум 1 спецсимвол")}>
            Минимум 1 спецсимвол (!, ", #, $...)
          </li>
        </ul>
        <label>
          <input
            className="input"
            type={showConfirmPassword ? "text" : "password"}
            id="confirm"
            name="confirm"
            placeholder="Повтори пароль"
            value={formik.values.confirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <img
            className="img_hide"
            onClick={hendleShowConfirmPassword}
            src={showConfirmPassword ? show : unShow}
            alt=""
          />
          {formik.errors.confirm && formik.touched.confirm ? (
            <div className="red">{formik.errors.confirm}</div>
          ) : null}
        </label>

        <button className="button gray " type="submit">
          Далее
        </button>
      </form>
    </>
  );
};

export default AuthForm;

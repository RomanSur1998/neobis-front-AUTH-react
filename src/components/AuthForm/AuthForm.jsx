import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import show from "../../assets/IconPasswordShow.svg";
import unShow from "../../assets/IconPasswordUnShow.svg";
import { getClassName } from "../../functions/getClassName";
import { validationSchema } from "../../functions/getShema";
import Field from "../Fields/Field";
import { setUser } from "../../redux/slices/UserSlice";

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
      <form className="d_flex column gap-4   " onSubmit={formik.handleSubmit}>
        <label className="">
          <Field
            classblock={"input"}
            type={"text"}
            name={"email"}
            formik={formik}
            placeholder={"Введите адрес почты"}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="red">{formik.errors.email}</div>
          ) : null}
        </label>
        <label>
          <Field
            classblock={"input"}
            type={"text"}
            name={"login"}
            formik={formik}
            placeholder={"Придумай логин"}
          />
          {formik.errors.login && formik.touched.login ? (
            <div className="red">{formik.errors.login}</div>
          ) : null}
        </label>

        <label>
          <Field
            classblock={
              formik.errors.password && formik.touched.password
                ? "input red"
                : "input green"
            }
            type={showPassword ? "text" : "password"}
            name={"password"}
            formik={formik}
            placeholder={"Создай пароль"}
          />
          <img
            className="img_hide"
            onClick={handleShowPassword}
            src={showPassword ? show : unShow}
            alt=""
          />
        </label>

        <ul className="align_s">
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
          <Field
            classblock={"input"}
            type={showConfirmPassword ? "text" : "password"}
            name={"confirm"}
            formik={formik}
            placeholder={"Повтори пароль"}
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

        <button
          className={!formik.isValid ? "button gray " : "button black"}
          type="submit"
        >
          Далее
        </button>
      </form>
    </>
  );
};

export default AuthForm;

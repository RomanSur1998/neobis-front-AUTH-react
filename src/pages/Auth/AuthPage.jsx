import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import MainPicture from "../../assets/MainPicture.svg";
import "./AuthPageStyle.css";

const AuthPage = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <section className="d_flex">
        <div>
          <img src={MainPicture} alt="" />
          <h2>Lorby </h2>
          <h3>Твой личный репетитор</h3>
        </div>
      </section>
      <h2>Вэлком бэк!</h2>
      <LoginForm />
    </>
  );
};

export default AuthPage;

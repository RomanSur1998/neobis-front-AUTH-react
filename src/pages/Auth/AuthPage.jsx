import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import MainPicture from "../../assets/MainPicture.svg";
import "./AuthPageStyle.css";

const AuthPage = () => {
  return (
    <>
      <section className="d_flex heigth">
        <div className="d_flex column  ">
          <img src={MainPicture} alt="" />
          <h2>Lorby </h2>
          <h3>Твой личный репетитор</h3>
        </div>
        <div className="d_flex column align_c">
          <h2>Вэлком бэк!</h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default AuthPage;

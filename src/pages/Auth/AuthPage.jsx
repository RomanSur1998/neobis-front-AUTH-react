import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const AuthPage = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <h2>Вэлком бэк!</h2>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field
            id="login"
            type="text"
            placeholder="Введи туда-сюда логин"
            name="login"
            // className={isShow ? "" : null}
          />
          <Field
            id="password"
            type="text"
            placeholder="Пароль (тоже введи"
            name="password"
          />
          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </>
  );
};

export default AuthPage;

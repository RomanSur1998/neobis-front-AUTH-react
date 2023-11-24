import { Field, Form, Formik } from "formik";
import React from "react";

const RegistrationPage = () => {
  return (
    <>
      <h2>Создать аккаунт Lorby</h2>
      <Formik
        initialValues={{
          email: "",
          login: "",
          password: "",
          confirm: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field
            type="email"
            placeholder="Введите адрес почты"
            id="email"
            name="email"
          />
          <Field
            id="login"
            type="text"
            placeholder="Придумай логин"
            name="login"
          />
          <Field
            id="password"
            type="text"
            placeholder="Создай пароль"
            name="password"
          />
          <Field
            id="confirm"
            type="text"
            name="confirm"
            placeholder="Повтори пароль"
          />
          <button type="submit">Далее</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationPage;

import React from "react";
import { useSelector } from "react-redux";
import "./RegistrationPageStyle.css";
import AuthForm from "../../components/AuthForm/AuthForm";

const RegistrationPage = () => {
  const user = useSelector((state) => state.user);

  console.log(user);
  return (
    <>
      <h2>Создать аккаунт Lorby</h2>
      <AuthForm />
    </>
  );
};

export default RegistrationPage;

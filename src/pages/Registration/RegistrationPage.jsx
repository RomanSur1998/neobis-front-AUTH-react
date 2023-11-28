import React from "react";
import { useSelector } from "react-redux";
import "./RegistrationPageStyle.css";
import AuthForm from "../../components/AuthForm/AuthForm";
import MainPicture from "../../assets/MainPicture.svg";

const RegistrationPage = () => {
  const user = useSelector((state) => state.user);

  console.log(user);
  return (
    <>
      <section className="d_flex heigth">
        <div className=" d_flex column  ">
          <img src={MainPicture} alt="" />
          <h2>Lorby </h2>
          <h3>Твой личный репетитор</h3>
        </div>
        <div>
          <h2>С оздать аккаунт Lorby</h2>
          <AuthForm />
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;

import React from "react";
import MainPicture from "../../assets/MainPicture.svg";
import { Link } from "react-router-dom";

const LogOutPage = () => {
  return (
    <>
      <section className="heigth d_flex column align_c ">
        <h2>Добро пожаловать!</h2>
        <h4>Lorby - твой личный репетитор</h4>
        <img src={MainPicture} alt="" />
        <Link>Выйти</Link>
      </section>
    </>
  );
};

export default LogOutPage;

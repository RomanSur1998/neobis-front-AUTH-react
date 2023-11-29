import React from "react";
import MainPicture from "../../assets/MainPicture.svg";
import { Link } from "react-router-dom";

const LogOutPage = () => {
  return (
    <>
      <section className="heigth d_flex column align_c ">
        <h2 className="lorby">Lorby </h2>
        <h3 className="self ">Твой личный репетитор</h3>
        <img src={MainPicture} alt="" />
        <Link>Выйти</Link>
      </section>
    </>
  );
};

export default LogOutPage;

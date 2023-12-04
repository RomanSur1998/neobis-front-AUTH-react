import React, { useEffect, useState } from "react";
import MainPicture from "../../assets/MainPicture.svg";
import { Link } from "react-router-dom";
import ModalLogOut from "../../components/ModalLogOut/ModalLogOut";

const LogOutPage = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <section className="heigth d_flex column align_c ">
        <h2 className="lorby">С возвращением!</h2>
        <h3 className="self ">Lorby - твой личный репетитор</h3>
        <img src={MainPicture} alt="" />
        <button
          onClick={() => {
            setActive(true);
          }}
        >
          Выйти
        </button>
      </section>
      {isActive ? (
        <ModalLogOut setActive={setActive} isActive={isActive}>
          <div className="d_flex column align_c gap-4 top-20">
            <h2>Выйти</h2>
            <h4>Точно выйти</h4>
            <button className="button black">Выйти </button>
            <button
              onClick={() => {
                setActive(false);
              }}
              className="button"
            >
              Нет, остаться{" "}
            </button>
          </div>
        </ModalLogOut>
      ) : null}
    </>
  );
};

export default LogOutPage;

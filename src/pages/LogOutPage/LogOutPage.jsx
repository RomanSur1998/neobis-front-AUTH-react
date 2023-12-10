import React, { useEffect, useState } from "react";
import MainPicture from "../../assets/MainPicture.svg";
import ModalLogOut from "../../components/ModalLogOut/ModalLogOut";
import { api } from "../../api/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const LogOutPage = () => {
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <section className="heigth d_flex column align_c ">
        <h2 className="lorby">С возвращением!</h2>
        <h3 className="self ">Lorby - твой личный репетитор</h3>
        <img src={MainPicture} alt="" />
        <span
          className="out"
          onClick={() => {
            setActive(true);
          }}
        >
          Выйти
        </span>
      </section>
      {isActive ? (
        <ModalLogOut setActive={setActive} isActive={isActive}>
          <div className="d_flex column align_c gap-4 top-20">
            <h2>Выйти</h2>
            <h4>Точно выйти</h4>
            <button
              className="button black"
              onClick={() => {
                api.logOutUser(navigate);
              }}
            >
              Выйти{" "}
            </button>
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

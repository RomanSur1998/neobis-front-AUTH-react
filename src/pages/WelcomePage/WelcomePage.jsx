import React, { useState } from "react";
import MainPicture from "../../assets/MainPicture.svg";
import ModalLogOut from "../../components/ModalLogOut/ModalLogOut";
import { api } from "../../api/api";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registrUser, signUpUser } from "../../redux/slices/UserSlice";

const WelcomePage = () => {
  const [isActive, setActive] = useState(false);
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log(user, "welcome");

  function handleCode(data) {
    setCode(data);
  }

  function sandeCode(event) {
    event.preventDefault();
    dispatch(registrUser({ code: code, navigate }));
  }

  console.log(code, "code");
  return (
    <>
      <section className="d_flex heigth align_c ">
        <div className="d_flex column   align_c ">
          <img src={MainPicture} alt="" />
          <h2 className="lorby">Lorby </h2>
          <h3 className="self ">Твой личный репетитор</h3>
        </div>
        <div className="d_flex column align_c width gap-4 ">
          <h2 className="text_align">
            Выслали письмо со ссылкой для завершения регистрации на <pre />
            {`${user.user.email || "example@gmail.com"} `}.
          </h2>
          <form className="d_flex column align_c gap-4" onSubmit={sandeCode}>
            <input
              className="input"
              placeholder="Введите код из почты "
              value={code}
              onChange={(event) => {
                handleCode(event.target.value);
              }}
            />
            <button className="button black" type="submit">
              Подтвердить
            </button>
          </form>

          <h4>(´｡• ω •｡`)</h4>
          <span
            className="out"
            onClick={() => {
              setActive(true);
              dispatch(signUpUser({ data: user.user, navigate }));
              // api.registration(JSON.stringify(user.user, null, 2), navigate);
            }}
          >
            Письмо не пришло
          </span>
        </div>
      </section>
      {isActive && (
        <ModalLogOut setActive={setActive} isActive={isActive}>
          <div className="d_flex column align_c gap-4 top-20">
            <h3 className="align_text text_width">
              Мы выслали еще одно письмо на указанную тобой почту: <pre />
              <span> {`${user.user.email || "example@gmail.com"} `}</span>
            </h3>

            <h4>Не забудь проверить ящик “Спам”!11!!!!</h4>
            <button
              className="button black"
              onClick={() => {
                setActive(!isActive);
              }}
            >
              Понятно{" "}
            </button>
          </div>
        </ModalLogOut>
      )}
    </>
  );
};

export default WelcomePage;

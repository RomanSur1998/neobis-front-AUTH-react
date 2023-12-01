import React, { useState } from "react";
import MainPicture from "../../assets/MainPicture.svg";
import ModalLogOut from "../../components/ModalLogOut/ModalLogOut";

const WelcomePage = () => {
  const [isActive, setActive] = useState(false);
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
            Выслали письмо со ссылкой для завершения регистрации на
            example@gmail.com
          </h2>
          <h4 className="text_align">
            Выслали письмо со ссылкой для завершения регистрации на
            example@gmail.com
          </h4>
          <h4>(´｡• ω •｡`)</h4>
          <button
            onClick={() => {
              setActive(true);
            }}
          >
            Письмо не пришло
          </button>
        </div>
      </section>
      {isActive ? (
        <ModalLogOut setActive={setActive} isActive={isActive}>
          <div className="d_flex column align_c gap-4 top-20">
            <h3 className="align_text">
              {/* Здесь надо вставить почту из тех данных . что дал пользователь  */}
              Мы выслали еще одно письмо на указанную тобой почту
              example@gmail.com
            </h3>
            <h4>Не забудь проверить ящик “Спам”!11!!!!</h4>
            <button className="button black">Понятно </button>
          </div>
        </ModalLogOut>
      ) : null}
    </>
  );
};

export default WelcomePage;

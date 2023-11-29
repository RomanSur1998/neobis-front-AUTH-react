import React from "react";
import MainPicture from "../../assets/MainPicture.svg";

const WelcomePage = () => {
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
          <div>Письмо не пришло</div>
          {/* <AuthForm /> */}
        </div>
      </section>
    </>
  );
};

export default WelcomePage;

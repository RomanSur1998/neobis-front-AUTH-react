import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import MainPicture from "../../assets/MainPicture.svg";
import { setToken } from "../../redux/slices/UserSlice";
import { getToken } from "../../helpers/getToken";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    getToken(dispatch, setToken);
  }, []);

  console.log(user);
  return (
    <>
      <section className="d_flex heigth align_c ">
        <div className="d_flex column   align_c ">
          <img src={MainPicture} alt="lorby" />
          <h2 className="lorby">Lorby </h2>
          <h3 className="self ">Твой личный репетитор</h3>
        </div>
        <div>
          <h2 className="text_align title magit_bot">Создать аккаунт Lorby</h2>
          <AuthForm />
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;

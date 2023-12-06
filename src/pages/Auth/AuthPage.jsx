import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import MainPicture from "../../assets/MainPicture.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  // !Добавил тостер
  const notify = () =>
    toast.error("Неверный логин или пароль", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // !Добавил тостер

  return (
    <>
      <section className="d_flex heigth align_c">
        <div className="d_flex column   align_c">
          <img src={MainPicture} alt="" />
          <h2 className="lorby">Lorby </h2>
          <h3 className="self ">Твой личный репетитор</h3>
        </div>
        <div className="d_flex column align_c gap-4 ">
          <h2>Вэлком бэк!</h2>
          <LoginForm notify={notify} />
        </div>
      </section>
      {/* <button onClick={notify}>Toasty</button> */}
      <ToastContainer />
    </>
  );
};

export default AuthPage;

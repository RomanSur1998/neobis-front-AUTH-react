import React from "react";
import { Route, Routes } from "react-router";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import AuthPage from "../pages/Auth/AuthPage";
import LogOutPage from "../pages/LogOutPage/LogOutPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";

const MainRouter = () => {
  const { refresh } = JSON.parse(localStorage.getItem("tokens"));

  const PRIVETE_ROUT_COLLECTION = [
    {
      link: "/out",
      element: <LogOutPage />,
      id: 5,
    },
  ];
  const ROTES_COLLECTION = [
    {
      link: "/",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
    // {
    //   link: "/out",
    //   element: <LogOutPage />,
    //   id: 3,
    // },
    {
      link: "/welcome",
      element: <WelcomePage />,
      id: 4,
    },
  ];
  return (
    <Routes>
      {ROTES_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem.id} />;
      })}
      {refresh
        ? PRIVETE_ROUT_COLLECTION.map((elem) => {
            return (
              <Route path={elem.link} element={elem.element} key={elem.id} />
            );
          })
        : null}
    </Routes>
  );
};

export default MainRouter;

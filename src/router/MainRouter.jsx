import React from "react";
import { Route, Routes } from "react-router";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import AuthPage from "../pages/Auth/AuthPage";
import LogOutPage from "../pages/LogOutPage/LogOutPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import { useSelector } from "react-redux";

const MainRouter = () => {
  const { token } = useSelector((state) => state.user);
  console.log(token, "user");

  const PRIVATE_ROUT_COLLECTION = [
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
      {token?.refresh
        ? PRIVATE_ROUT_COLLECTION.map((elem) => {
            return (
              <Route path={elem.link} element={elem.element} key={elem.id} />
            );
          })
        : null}
    </Routes>
  );
};

export default MainRouter;

import React from "react";
import { Route, Routes } from "react-router";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import AuthPage from "../pages/Auth/AuthPage";

const MainRouter = () => {
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
  ];
  return (
    <Routes>
      {ROTES_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem.id} />;
      })}
    </Routes>
  );
};

export default MainRouter;

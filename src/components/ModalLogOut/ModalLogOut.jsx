import React from "react";

const ModalLogOut = ({ setActive, isActive, children }) => {
  console.log(isActive);
  return (
    <div
      className={isActive ? "modal d_flex align_c active" : ""}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={isActive ? "modal_content active" : ""}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLogOut;

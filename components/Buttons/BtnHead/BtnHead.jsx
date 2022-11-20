import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "../../Header/header.module.css";

export const BtnHead = ({ children }) => {
  return (
    <>
      <button type="button" className={`btn ${css.btn_head_clr}`}>
        {children}
      </button>
    </>
  );
};

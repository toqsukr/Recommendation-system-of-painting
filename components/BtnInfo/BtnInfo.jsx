import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "../HeadRcm/header.module.css";

export const BtnInfo = ({ children }) => {
  return (
    <button type="button" className={`btn ${css.btn_head_clr}`} id={css.info}>
      {children}
    </button>
  );
};

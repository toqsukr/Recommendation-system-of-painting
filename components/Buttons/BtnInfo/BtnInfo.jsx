import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "../../Header/header.module.css";

export const BtnInfo = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn ${css.btn_head_clr}`}
      id={css.info}
    >
      {children}
    </button>
  );
};

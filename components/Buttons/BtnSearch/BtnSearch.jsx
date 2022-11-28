import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "../../Header/header.module.css";

export const BtnSearch = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`btn ${css.btn_head_clr}`}
    >
      {children}
    </button>
  );
};

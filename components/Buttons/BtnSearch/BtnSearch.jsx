import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "../../Header/header.module.css";

export const BtnSearch = ({ children }) => {
  return (
    <button type="submit" className={`btn ${css.btn_head_clr}`}>
      {children}
    </button>
  );
};

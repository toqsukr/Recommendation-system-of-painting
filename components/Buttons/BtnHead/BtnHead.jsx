import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import css from "../../Header/header.module.css";

export const BtnHead = ({ children }) => {
  return (
    <>
      <button type="button" className={`btn ${css.btn_head_clr}`}>
        {children.name}
      </button>
    </>
  );
};

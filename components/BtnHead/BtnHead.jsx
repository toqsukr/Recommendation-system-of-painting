import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./BtnHead.module.css";
export const ButtonHead = ({ props }) => {
  return (
    <button type="button" className={`btn ${css.btn_head_clr}`} id={props.info}>
      {props}
    </button>
  );
};

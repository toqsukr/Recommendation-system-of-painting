import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./BtnInfo.module.css";
export const ButtonHead = () => {
  return (
    <button
      type="button"
      className={`btn ${css.btn_head_clr}`}
      id={css.info}
    ></button>
  );
};

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./SwitchPages.module.css";

export const SwitchPages = ({ children, onClick, type, style }) => {
  return (
    <>
      <button
        style={style}
        onClick={onClick}
        type={type}
        className={`btn ${css.btn_switch}`}
      >
        {children}
      </button>
    </>
  );
};

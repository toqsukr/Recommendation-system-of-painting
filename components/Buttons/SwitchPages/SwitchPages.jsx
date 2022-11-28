import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./SwitchPages.module.css";

export const SwitchPages = ({ children, onClick, type, ariaLabel }) => {
  return (
    <>
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        type={type}
        className={`btn ${css.btn_switch}`}
      >
        {children}
      </button>
    </>
  );
};

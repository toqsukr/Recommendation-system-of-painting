import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import css from "./header.module.css";
export const HeadRcm = ({ children }) => {
  return (
    <div id={css.header_fixed}>
      <nav className={`navbar navbar-expand-lg bg-dark`} id={css.header}>
        <div className="container-fluid" id={css.header}>
          <a type="button" className={`btn ${css.btn_head_clr}`}>
            {children.value[0]}
          </a>
          <button
            type="button"
            className={`btn ${css.btn_head_clr}`}
            id={css.info}
          >
            {children.value[1]}
          </button>
        </div>
      </nav>
    </div>
  );
};

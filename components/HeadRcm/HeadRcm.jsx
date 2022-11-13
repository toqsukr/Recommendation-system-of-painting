import React from "react";
import { BtnHead } from "../BtnHead/BtnHead";
import { BtnInfo } from "../BtnInfo/BtnInfo";
import "bootstrap/dist/css/bootstrap.css";
import css from "./header.module.css";
export const HeadRcm = ({ children }) => {
  return (
    <div id={css.header_fixed}>
      <nav className={`navbar navbar-expand-lg bg-dark`} id={css.header}>
        <div className="container-fluid" id={css.header}>
          <BtnHead>{children.value[0]}</BtnHead>
        </div>
      </nav>
    </div>
  );
};

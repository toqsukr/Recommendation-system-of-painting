import React from "react";
import { BtnHead } from "../../Buttons/BtnHead/BtnHead";
import { BtnInfo } from "../../Buttons/BtnInfo/BtnInfo";
import { recommendation } from "../../information";
import "bootstrap/dist/css/bootstrap.css";
import css from "../header.module.css";

export const HeadRcm = () => {
  return (
    <div id={css.header_fixed}>
      <nav className="navbar navbar-expand-lg bg-dark" id={css.header}>
        <div className="container-fluid" id={css.header}>
          <BtnHead>{recommendation.cltn.name}</BtnHead>
          <BtnInfo>{recommendation.info}</BtnInfo>
        </div>
      </nav>
    </div>
  );
};

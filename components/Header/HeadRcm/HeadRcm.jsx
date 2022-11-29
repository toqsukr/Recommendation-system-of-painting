import React, { useState, useEffect } from "react";
import { BtnHead } from "../../Buttons/BtnHead/BtnHead";
import { BtnInfo } from "../../Buttons/BtnInfo/BtnInfo";
import { recommendation } from "../../information";
import "bootstrap/dist/css/bootstrap.css";
import css from "../header.module.css";

export const HeadRcm = ({ onClick }) => {
  let [info, setInfo] = useState(null);
  return (
    <div id={css.header_fixed}>
      <nav className="navbar navbar-expand-lg bg-dark" id={css.header}>
        <div className="container-fluid" id={css.header}>
          <BtnHead path="/collection">{recommendation.cltn.name}</BtnHead>
          <BtnInfo onClick={onClick}>{"i"}</BtnInfo>
        </div>
      </nav>
    </div>
  );
};

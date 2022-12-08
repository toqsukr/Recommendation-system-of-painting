import React from "react";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className="container container-lg container-md container-sm" id={css.box}>
      <h1 id={css.Error}>Тут ничего нет D:</h1>
    </div>
  );
};

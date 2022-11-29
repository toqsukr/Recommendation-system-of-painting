import React from "react";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className="container container-lg container-md container-sm">
      <h1 id={css.Error}>Такой картинки нет в вашей коллекции D:</h1>
    </div>
  );
};

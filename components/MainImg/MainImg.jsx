import React from "react";
import { Carusel } from "../Carusel/Carusel";
import { recommendation } from "../information";
export const MainImg = () => {
  return (
    <Carusel
      height={recommendation.carusel.height}
      width={recommendation.carusel.width}
      path={recommendation.carusel.path}
    />
  );
};
